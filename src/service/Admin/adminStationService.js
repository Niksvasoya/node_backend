const stationImages = require("../../models/Station/stationImages");
const station = require("../../models/Station/station");
const { default: mongoose } = require("mongoose");
const fs = require("fs");
const { escapeRegExp } = require("lodash");
const govStation = require("../../models/Station/govStation");

class AdminStationServices {
  constructor() {}
  async addStationImages(body, files = []) {
    const { stationId } = body;
    const isExisted = await stationImages.exists({ stationId });
    if (isExisted) {
      throw new Error("Images are already exist!");
    }
    let images = [];
    if (files.length) {
      files.forEach((element) => {
        images.push(element?.filename);
      });
    }
    const data = await stationImages.create({ stationId, images });
    return data;
  }

  async addOrEditGovStationsImages(body, files = []) {
    let { name, oldImage } = body;
    if (name) {
      let imgArray = [];
      files.length > 0 &&
        files.map((element) => {
          imgArray.push(element?.filename);
        });
      oldImage = JSON.parse(oldImage);
      const newImages = files.length > 0 ? imgArray : oldImage;
      const updateStations = await govStation.updateMany(
        { companyname: name },
        {
          images: newImages,
          // images: files.length > 0 && oldImage.length ? [...oldImage, ...imgArray] : newImages
        }
      );
      return updateStations;
    }
  }

  async deleteGovStationImage(body) {
    let { name } = body;
    const companyData = await govStation.findOne({ companyname: name });
    if (companyData && companyData.images.length) {
      const fileName = companyData.images[0];
      const directoryPath = (__dirname + "/uploads/").replace(
        "/src/service/Admin",
        ""
      );
      fs.unlinkSync(directoryPath + fileName);
    }
    const updateStations = await govStation.updateMany(
      { companyname: name },
      {
        images: [],
      }
    );
    return updateStations;
  }

  async editStationImages(params, body, files = []) {
    const { _id } = params;
    let { oldImage } = body;

    const stationImagesData = await stationImages.findOne({ _id });
    let imgArray = [];
    files.length > 0 &&
      files.map((element) => {
        imgArray.push(element?.filename);
      });
    oldImage = JSON.parse(oldImage);
    const newImages = files.length > 0 ? imgArray : oldImage;
    const data = await stationImages.findByIdAndUpdate(
      stationImagesData._id,
      {
        stationId: stationImagesData.stationId,
        images:
          files.length > 0 && oldImage.length
            ? [...oldImage, ...imgArray]
            : newImages,
      },
      {
        new: true,
      }
    );
    return data;
  }

  async getStationImages(body) {
    let { search, page, sortBy, sortedF, limit, stationId } = body;

    if (sortedF === "" || sortedF === undefined) {
      sortedF = "createdAt";
    }
    let options = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
      sort: { [sortedF]: sortBy === "asc" ? 1 : -1 },
      populate: "stationId",
    };
    const searchQuery = search ? search : "";
    const escapedSearchQuery = escapeRegExp(searchQuery);
    let query = {};
    if (stationId) {
      query.stationId = stationId;
    }
    if (searchQuery !== "") {
      const searchRegex = new RegExp(escapedSearchQuery, "i");
      query.$or = [{ name: searchRegex }, { description: searchRegex }];
    }
    const data = await stationImages.paginate(query, options);
    return data;
  }

  async deleteStationImages(params, body) {
    let fileName;
    console.log({ params, body });
    const { _id } = params;
    if (body) {
      fileName = body.fileName;
    }
    const stationImagesData = await stationImages.findOne({ _id });
    if (!stationImagesData) {
      return "No images found for this station.";
    }
    const existedImages = stationImagesData.images;
    const directoryPath = (__dirname + "/uploads/").replace(
      "/src/service/Admin",
      ""
    );
    if (fileName) {
      existedImages.forEach((name) => {
        if (name === fileName) {
          fs.unlinkSync(directoryPath + fileName);
        }
      });
      const updatedImages = existedImages.filter((name) => name !== fileName);
      if (!updatedImages.length) {
        await stationImages.deleteOne({ _id });
      } else {
        await stationImages.findByIdAndUpdate(stationImagesData._id, {
          stationId: stationImagesData.stationId,
          images: updatedImages,
        });
      }
    } else {
      existedImages.forEach((fileName) => {
        fs.unlinkSync(directoryPath + fileName);
      });
      await stationImages.deleteOne({ _id });
    }
    return true;
  }

  async getAllStations() {
    // const data = await station.find({}).select("_id name")
    const data = await station.aggregate([
      {
        $lookup: {
          from: "merchants",
          localField: "merchant_id",
          foreignField: "_id",
          as: "mercahntInfo",
        },
      },
      { $unwind: "$mercahntInfo" },
      {
        $project: {
          timeSlots: 0,
          chargingPoints: 0,
          location: 0,
        },
      },
    ]);
    return data;
  }
  async makeAdminStationActivate(id, payload) {
    const { isActive } = payload;
    const activatedStation = await station.findByIdAndUpdate(
      { _id: id },
      { isActive: isActive },
      { new: true }
    );

    return activatedStation;
  }

  async getGovUniqueStationsName() {
    const data = await govStation.distinct("companyname");
    return data;
  }
}
module.exports = new AdminStationServices();
