"use strict";(self.webpackChunktest_demo=self.webpackChunktest_demo||[]).push([[535],{83792:function(e,n,t){var r=t(29439),a=t(1413),c=t(47313),i=t(26418),s=t(23486),o=t(46417),l=function(e){return(0,o.jsx)("button",(0,a.Z)((0,a.Z)({},e),{},{children:e.children}))};n.Z=function(e){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),a=t[0],u=t[1],d=e.PageButtonComponent,h=void 0===d?l:d,m=e.changeMethodFlag,p=e.onPageChange,f=e.page,g=e.resetMethodFlag,x=e.page+1,b=(0,c.useCallback)((function(e,n){return n<7?v([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[]);(0,c.useEffect)((function(){u(b(null,e.pages))}),[b,e.pages]),(0,c.useEffect)((function(){m&&(0===f?(p(null),p(0)):p(0),g())}),[m,p,f,g]);var v=function(e,n){return e.filter((function(e){return e<=n}))},j=function(n){if(n!==e.page+1){var t=b(n,e.pages);u(v(t,e.pages)),e.onPageChange(n-1)}};return(0,o.jsxs)("div",{className:"Table__pagination",children:[(0,o.jsx)("div",{className:"Table__prevPageWrapper",children:(0,o.jsx)(h,{className:"Table__pageButton",onClick:function(){1!==x&&j(x-1)},disabled:1===x,children:(0,o.jsx)(i.Z,{size:18})})}),(0,o.jsx)("div",{className:"Table__visiblePagesWrapper",children:a&&a.map((function(e,n,t){return(0,o.jsx)(h,{className:x===e?"Table__pageButton Table__pageButton--active":"Table__pageButton",onClick:j.bind(null,e),children:t[n-1]+2<e?"...".concat(e):e},e)}))}),(0,o.jsx)("div",{className:"Table__nextPageWrapper",children:(0,o.jsx)(h,{className:"Table__pageButton",onClick:function(){x!==e.pages&&j(x+1)},disabled:x===e.pages,children:(0,o.jsx)(s.Z,{size:18})})})]})}},5941:function(e,n,t){t(47313);var r=t(97520),a=t.n(r),c=t(46417);n.Z=function(e){var n=e.isOpen,t=e.onClose,r=e.confirmText,i=e.message,s=e.handleConfirm,o=e.cancleBtnTxt,l=e.customIcon,u=e.titleTxt,d=r||"Yes, delete it!",h=!!l;return(0,c.jsx)("div",{children:(0,c.jsx)(a(),{warning:!l,custom:h,showCancel:!0,show:n,confirmBtnText:d,confirmBtnBsStyle:"secondary btn-sm confirmBtn",cancelBtnBsStyle:"success btn-sm confirmBtn",title:u||"",customIcon:l,onConfirm:function(){s()},onCancel:t,cancelBtnText:o||"Cancel",children:i})})}},28767:function(e,n,t){var r,a=t(30168),c=t(17387).ZP.div(r||(r=(0,a.Z)(['\n  .tbl-loader {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.05);\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .lds-ring {\n      div {\n        width: 8px !important;\n        height: 45px !important;\n        margin: 0px !important;\n        border-color: #563c91 transparent transparent transparent !important;\n      }\n    }\n  }\n\n  .module-header {\n    display: flex;\n    align-items: center;\n    @media (max-width: 575.98px) {\n      display: block;\n      .react-form-input {\n        margin-top: 15px;\n        margin-bottom: 5px;\n      }\n      button {\n        margin: 0 !important;\n      }\n    }\n  }\n  table {\n    width: 100%;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  tr:nth-child(even) {\n    background: rgba(0, 0, 0, 0.03);\n  }\n\n  tr:nth-child(odd) {\n    background: rgba(255, 255, 255);\n  }\n\n  .table-container {\n    margin: auto 24px;\n    padding-bottom: 20px;\n  }\n  .custom-react-table-theme-class {\n    th {\n      min-width: 200px;\n    }\n    tbody {\n      td {\n        padding: 10px;\n        font-family: "muli-medium";\n        color: #757575;\n      }\n      td.wide-cell {\n        width: 150px;\n      }\n    }\n  }\n\n  .Table__itemCount {\n    font-size: 14px;\n  }\n\n  .Table__pagination {\n    display: flex;\n    justify-content: flex-end;\n    padding: 20px 24px;\n  }\n\n  .Table__pageButton {\n    font-size: 14px;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    color: #757575 !important;\n    margin: 0 5px;\n  }\n\n  .Table__pageButton:disabled {\n    cursor: not-allowed;\n    color: gray;\n  }\n\n  .Table__pageButton--active {\n    font-weight: bold;\n    background: #6ab664;\n    color: white !important;\n    width: 38px;\n    height: 29px;\n    border-radius: 6px;\n  }\n\n  .tabl-search {\n    padding: 4px;\n    margin: 10px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  .back-icon {\n    position: absolute;\n    right: 30px;\n    bottom: 27px;\n    color: #563c91;\n  }\n\n  .-sort-desc {\n    box-shadow: none !important;\n    &:before {\n      content: "\u25bc";\n      float: right;\n      margin-right: 14px;\n      color: #563c91;\n    }\n  }\n\n  .-sort-asc {\n    box-shadow: none !important;\n    &:before {\n      content: "\u25b2";\n      float: right;\n      margin-right: 14px;\n      color: #563c91;\n    }\n  }\n  .react-action-class.wide-cell {\n    width: 150px;\n  }\n  .react-action-class {\n    button {\n      height: auto !important;\n      width: auto !important;\n    }\n  }\n  .break-word {\n    word-break: break-word;\n  }\n'])));n.Z=c},300:function(e,n,t){t.d(n,{$s:function(){return l},E$:function(){return i},L3:function(){return m},PD:function(){return c},Y2:function(){return u},eo:function(){return o},jN:function(){return a},mS:function(){return d},sw:function(){return h},zI:function(){return s}});var r=t(20086),a=function(e,n){return(0,r.hi)(e).get("vehicle/vehiclemaster/getbrand?page=".concat(n.currentPage,"&limit=").concat(n.limit,"&search=").concat(n.search,"&sortField=").concat(n.sortField?n.sortField:"name","&sortOrder=").concat(n.sortOrder)).then(r._y).catch(r.S3)},c=function(e,n){return(0,r.hi)(e).get("/vehicle/vehiclemaster/getModel?page=".concat(n.currentPage,"&limit=").concat(n.limit,"&search=").concat(n.search,"&sortField=").concat(n.sortField?n.sortField:"name","&sortOrder=").concat(n.sortOrder)).then(r._y).catch(r.S3)},i=function(e,n,t){return(0,r.hi)(e).put("vehicle/vehiclemaster/editModel/".concat(n),t).then(r._y).catch(r.S3)},s=function(e,n,t){return(0,r.hi)(e).put("vehicle/vehiclemaster/editBrand/".concat(t),n).then(r._y).catch(r.S3)},o=function(e,n){return(0,r.hi)(e).put("/vehicle/vehiclemaster/deleteBrand/".concat(n)).then(r._y).catch(r.S3)},l=function(e,n){return(0,r.hi)(e).put("vehicle/vehiclemaster/deleteModel/".concat(n)).then(r._y).catch(r.S3)},u=function(e,n){return(0,r.hi)(e).post("vehicle/vehiclemaster/addBrand",n).then(r._y).catch(r.S3)},d=function(e,n){return(0,r.hi)(e).post("vehicle/vehiclemaster/addModel",n).then(r._y).catch(r.S3)},h=function(e){return(0,r.hi)(e).get("/vehicle/vehiclemaster/getBrandForDropDown").then(r._y).catch(r.S3)},m=function(e){return(0,r.hi)(e).get("/charger-type/charger/getAllChargerForList").then(r._y).catch(r.S3)}},73535:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(1413),a=t(74165),c=t(15861),i=t(29439),s=t(47313),o=t(28767),l=t(9038),u=t(42995),d=t(1084),h=t(12756),m=t(12213),p=t(79429),f=t(15869),g=(0,p.j0)({validationSchema:f.Ry().shape({name:f.Z_().required("Please enter modal name"),vehicleType:f.Z_().required("Please select the vehicle type"),brand_id:f.Z_().required("Please select the vehicle brand"),battery_capacity:f.Rx().typeError("Battery capacity must be a number").max(250,"Battery capacity can't more than 250kWh").min(0,"Battery capacity must be greater than or equal to 0").integer("Battery capacity must be an integer").required("Please enter battery capacity").positive("Battery capacity must be a positive number"),charger_id:f.IX().min(1,"Please select the charger type").required("Please select the charger type"),regularRechargeTime:f.Z_().required("Please enter the regular charge time"),image:f.Z_(),fastRechargeTime:f.Z_().required("Please enter the fast charge time")}),mapPropsToValues:function(e){return{name:"",vehicleType:"",brand_id:"",battery_capacity:"",charger_id:[],regularRechargeTime:"",image:"",fastRechargeTime:""}},validateOnMount:!0,handleSubmit:function(e){},displayName:"VehicleModelValidationForm",enableReinitialize:!0}),x=t(300),b=t(11585),v=t(13373),j=t(78911),y=t(46417),Z=v.Z.success,_=v.Z.error,T=v.Z.fetching,w=(0,l.qC)(g,(0,d.$j)((function(e){return(0,r.Z)((0,r.Z)({},e.themeChanger),{},{token:e.auth.accessToken})}),{success:Z,error:_,fetching:T}))((function(e){var n=e.isEdit,t=e.editData,o=e.onClose,l=[{value:"Two Wheeler",label:"Two Wheeler"},{value:"Four Wheeler",label:"Four Wheeler"},{value:"Three Wheeler",label:"Three Wheeler"},{value:"Other",label:"Other"}],u=(0,s.useState)([]),d=(0,i.Z)(u,2),p=d[0],f=d[1],g=(0,s.useState)([]),v=(0,i.Z)(g,2),T=v[0],w=v[1],C=e.values,S=e.handleChange,N=e.handleBlur,k=e.errors,B=e.touched,P=e.submitCount,R=e.token,F=e.isValid,W=e.setValues,O=e.handleSubmit,M=e.setFieldValue,E=e.toggleRefresh,z=(0,s.useState)(!1),A=(0,i.Z)(z,2),q=A[0],I=A[1];(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.sw)(R).then((function(e){e.success?f(e.data.map((function(e){return{value:e._id,label:e.name}}))):_(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.L3)(R).then((function(e){e.success?w(e.data.map((function(e){return{value:e._id,label:e.name}}))):_(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.useEffect)((function(){n&&W((0,r.Z)({},t))&&(M("regularRechargeTime",t.recharge_time.regular),M("fastRechargeTime",t.recharge_time.fast))}),[t]);var V=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),O(),F){e.next=4;break}return e.abrupt("return");case 4:if((r=new FormData).append("name",C.name.toLowerCase()),r.append("vehicleType",C.vehicleType),r.append("brand_id",C.brand_id),r.append("charger_id",C.charger_id),r.append("battery_capacity",C.battery_capacity),r.append("recharge_time",JSON.stringify({regular:C.regularRechargeTime,fast:C.fastRechargeTime})),r.append("image",C.image),I(!0),!n){e.next=18;break}return e.next=16,(0,x.E$)(R,C._id,r).then((function(e){e.success?(Z(e.message),E(!0),I(!1),o()):(_(e.message),I(!1))}));case 16:e.next=20;break;case 18:return e.next=20,(0,x.mS)(R,r).then((function(e){e.success?(Z(e.message),I(!1),E(!0),o()):(_(e.message),I(!1),E(!0))}));case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=function(e){var n=e.field;return k[n]&&B[n]||P>0?(0,y.jsx)("span",{className:e.class?e.class:"error-msg",children:k[n]}):(0,y.jsx)("span",{})};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h.Z,{toggle:function(){return o()},children:[n?"Edit":"Add"," Vehicle Model"]}),(0,y.jsxs)(m.Z,{children:[(0,y.jsxs)("form",{className:"row g-3",children:[(0,y.jsxs)("div",{className:"col-md-6 form-group",children:[(0,y.jsxs)("label",{children:["Model Name"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)("input",{type:"text",className:"form-control react-form-input ",id:"name",onChange:S,onBlur:N,value:C.name,placeholder:"Model Name"}),(0,y.jsx)(D,{field:"name"})]}),(0,y.jsxs)("div",{className:"col-md-6 form-group",children:[(0,y.jsxs)("label",{children:["Select Brand"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)(b.ZP,{id:"brand_id",onBlur:N,value:p.find((function(e){return e.value===C.brand_id})),onChange:function(e){M("brand_id",e.value)},options:p}),(0,y.jsx)(D,{field:"brand_id"})]}),(0,y.jsxs)("div",{className:"col-md-6 form-group",children:[(0,y.jsxs)("label",{children:["Battery Capacity"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)("input",{type:"text",className:"form-control react-form-input",id:"battery_capacity",onChange:S,onBlur:N,value:C.battery_capacity,placeholder:"Battery Capacity"}),(0,y.jsx)(D,{field:"battery_capacity"})]}),(0,y.jsxs)("div",{className:"col-md-6 form-group",children:[(0,y.jsxs)("label",{children:["Select Charger"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)(b.ZP,{id:"charger_id",options:T,isMulti:!0,onBlur:N,value:T.filter((function(e){return C.charger_id.includes(e.value)})),onChange:function(e){if(e&&null!==e){var n=e.map((function(e){return e.value}));M("charger_id",n)}else M("charger_id",[])}}),(0,y.jsx)(D,{field:"charger_id"})]}),(0,y.jsx)("div",{className:"col-md-12 form-group",children:(0,y.jsxs)("div",{className:"row",children:[(0,y.jsxs)("div",{className:"col-md-6",children:[(0,y.jsxs)("label",{children:["Regular Charge Time"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)("input",{type:"text",className:"form-control react-form-input",id:"regularRechargeTime",onChange:S,onBlur:N,value:C.regularRechargeTime,placeholder:"Regular Charge Time"}),(0,y.jsx)(D,{field:"regularRechargeTime"})]}),(0,y.jsxs)("div",{className:"col-md-6",children:[(0,y.jsxs)("label",{children:["Fast Charge Time"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)("input",{type:"text",className:"form-control react-form-input",id:"fastRechargeTime",onChange:S,onBlur:N,value:C.fastRechargeTime,placeholder:"Fast Charge Time"}),(0,y.jsx)(D,{field:"fastRechargeTime"})]})]})}),(0,y.jsxs)("div",{className:"col-md-6 form-group",children:[(0,y.jsxs)("label",{children:["Select Vehicle Type"," ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,y.jsx)(b.ZP,{id:"vehicleType",alue:C.vehicleType,value:l.find((function(e){return e.value===C.vehicleType})),onChange:function(e){M("vehicleType",e.value)},options:l}),(0,y.jsx)(D,{field:"vehicleType"})]}),(0,y.jsxs)("div",{className:"col-md-6 form-group",children:[(0,y.jsxs)("label",{children:["Image ",(0,y.jsx)("span",{style:{color:"red",fontWeight:"bold"}})]}),(0,y.jsx)("input",{type:"file",className:"form-control react-form-input",id:"image",onChange:function(e){return M("image",e.target.files[0])},onBlur:N,placeholder:"Image",accept:"image/*"}),C.image&&"object"===typeof C.image?(0,y.jsx)("img",{src:URL.createObjectURL(C.image),height:80,width:100,alt:"".concat(C._id,"_image")}):C.image&&"string"===typeof C.image?(0,y.jsx)("img",{src:"".concat("http://3.142.224.88:8000","/").concat(C.image),height:80,width:100,alt:"".concat(C._id,"_image")}):null]})]}),(0,y.jsxs)("div",{className:"row justify-content-center",children:[(0,y.jsx)("button",{color:"success",onClick:function(e){return V(e)},type:"submit",className:"btn btn-success mx-3 btnsize",disabled:q,children:n?"Update":"Save"}),(0,y.jsx)("button",{onClick:function(){o()},className:"btn  btn-secondary btnsize",children:"Cancel"})]})]}),q?(0,y.jsx)(j.Z,{}):""]})})),C=t(45110),S=t(83792),N=t(5211),k=t(5941),B=t(59884),P=t(14303),R=t(41612),F=v.Z.success,W=v.Z.error,O=v.Z.fetching,M=(0,l.qC)((0,d.$j)((function(e){return{accessToken:e.auth.accessToken}}),{success:F,error:W,fetching:O}))((function(e){var n=e.accessToken,t=e.error,l=e.success,d=e.fetching,h=(0,s.useState)([]),m=(0,i.Z)(h,2),p=m[0],f=m[1],g=(0,s.useState)(!0),b=(0,i.Z)(g,2),v=b[0],Z=b[1],_=(0,s.useState)(!1),T=(0,i.Z)(_,2),F=T[0],W=T[1],O=(0,s.useState)(0),M=(0,i.Z)(O,2),E=M[0],z=M[1],A=(0,s.useState)(1),q=(0,i.Z)(A,2),I=q[0],V=q[1],D=(0,s.useState)(10),H=(0,i.Z)(D,2),$=H[0],L=(H[1],(0,s.useState)("")),U=(0,i.Z)(L,2),G=U[0],Y=U[1],J=(0,s.useState)(""),X=(0,i.Z)(J,2),K=X[0],Q=X[1],ee=(0,s.useState)("asc"),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,s.useState)(!1),ce=(0,i.Z)(ae,2),ie=ce[0],se=ce[1],oe=(0,s.useState)(!1),le=(0,i.Z)(oe,2),ue=le[0],de=le[1],he=(0,s.useState)({}),me=(0,i.Z)(he,2),pe=me[0],fe=me[1],ge=(0,s.useState)(),xe=(0,i.Z)(ge,2),be=xe[0],ve=xe[1],je=(0,s.useState)(""),ye=(0,i.Z)(je,2),Ze=ye[0],_e=ye[1],Te=(0,s.useState)(""),we=(0,i.Z)(Te,2),Ce=we[0],Se=we[1],Ne=(0,s.useState)(),ke=(0,i.Z)(Ne,2),Be=ke[0],Pe=ke[1],Re=(0,s.useState)(""),Fe=(0,i.Z)(Re,2),We=Fe[0],Oe=Fe[1],Me=function(e){var n=e.title,t=e.renderSortArrow;return(0,y.jsxs)("div",{children:[n,t&&t()]})},Ee=(0,s.useMemo)((function(){return[{Header:function(e){return(0,y.jsx)(Me,{title:"Name",renderSortArrow:function(){return Le(e.column.id)}})},accessor:"name"},{Header:function(e){return(0,y.jsx)(Me,{title:"Brand Name",renderSortArrow:function(){return Le(e.column.id)}})},accessor:"brandname"},{Header:function(e){return(0,y.jsx)(Me,{title:"Vehicle Type",renderSortArrow:function(){return Le(e.column.id)}})},accessor:"vehicleType"},{Header:function(e){return(0,y.jsx)(Me,{title:"Status"})},accessor:"isActive",Cell:function(e,n){return(0,y.jsx)("div",{children:(0,y.jsx)(R.Z,{checked:!!e.cell.value,onClick:function(){Oe(e.cell.row.original._id),Se(e.cell.value),Pe(!0)},color:"success"})})}},{Header:function(e){return(0,y.jsx)(Me,{title:"Action"})},accessor:"actions",Cell:function(e){return(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{children:(0,y.jsx)(B.Z,{size:18,onClick:function(){de(!0),se(!0),fe(null===e||void 0===e?void 0:e.row.original)},className:"action-edit "})}),(0,y.jsx)("div",{className:"ml-3",children:(0,y.jsx)(P.Z,{size:18,className:"action-delete",onClick:function(){var n;ve(!0),_e(null===(n=e.row.original)||void 0===n?void 0:n._id)}})})]})}}]}),[v]),ze=(0,C.useTable)({data:p,columns:Ee,manualSortBy:!0,initialState:{pageSize:$,pageIndex:0}},C.useSortBy,C.usePagination),Ae=ze.getTableProps,qe=ze.getTableBodyProps,Ie=ze.prepareRow,Ve=ze.rows,De=(ze.state.pageIndex,ze.headerGroups),He=(0,s.useCallback)((0,c.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),r={currentPage:E+1,limit:$,search:G,sortBy:K,sortOrder:te},e.next=4,(0,x.PD)(n,r).then((function(e){e.success?(f(e.data.docs),console.log(e.data.docs),V(e.data.totalPages),Z(!1),W(!1)):t(e.message)}));case 4:case"end":return e.stop()}}),e)})))),$e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isActive:!Ce},d(),e.next=5,(0,x.E$)(n,We,t);case 5:e.sent.success&&(Pe(!1),l("Success"),Z(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){v&&He()}),[v,E]),(0,s.useEffect)((function(){if(void 0!==G){var e=setTimeout((function(){return z(0)}),He(),100);return function(){return clearTimeout(e)}}}),[G]);var Le=function(e){return e!==K?null:"asc"!==te?(0,y.jsx)("i",{className:"fa fa-sort-down ml-1 text-dark"}):(0,y.jsx)("i",{className:"fa fa-sort-up ml-1 text-dark"})},Ue=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.$s)(n,Ze);case 2:(r=e.sent).success&&(ve(!1),l(r.message),Z(!0));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"row ",children:[(0,y.jsxs)("div",{className:" col-12 d-flex justify-content-end",children:[(0,y.jsx)("div",{className:"mt-2",children:(0,y.jsx)("input",{className:"form-control react-form-input ",type:"search",placeholder:"Search Model",onChange:function(e){Y(e.target.value)}})}),(0,y.jsx)("div",{className:"mt-2 ml-3",children:(0,y.jsxs)("button",{type:"submit",className:" btn btn-success w-10 mr-3 addbtncolor",onClick:function(){de(!1),se(!0)},children:[(0,y.jsx)(N.Z,{className:"mr-2"}),"Add Model"]})})]}),(0,y.jsxs)("div",{className:"col-12 mt-3",children:[(0,y.jsxs)(o.Z,(0,r.Z)((0,r.Z)({},e),{},{children:[(0,y.jsx)("div",{className:"table-responsive table-white-box",children:(0,y.jsx)("div",{style:{maxHeight:"calc(100vh - 250px)",position:"relative"},children:(0,y.jsxs)("table",(0,r.Z)((0,r.Z)({className:"table"},Ae()),{},{children:[(0,y.jsx)("thead",{style:{position:"sticky",top:"-20px",zIndex:1},children:De.map((function(e){return(0,y.jsx)("tr",(0,r.Z)((0,r.Z)({className:"thead-color"},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,y.jsx)("th",(0,r.Z)((0,r.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{onClick:function(){var n;"id"!==(n=e.id)&&(K===n?(re("asc"===te?"desc":"asc"),Z(!0)):(Q(n),re("asc"),Z(!0)))},children:(0,y.jsx)("div",{children:e.render("Header")})}))}))}))}))}),p.length?(0,y.jsx)("tbody",(0,r.Z)((0,r.Z)({},qe()),{},{children:Ve.map((function(e){return Ie(e),(0,y.jsx)("tr",(0,r.Z)((0,r.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,y.jsx)("td",(0,r.Z)((0,r.Z)({},e.getCellProps()),{},{children:"image"===e.column.id?(0,y.jsx)("img",{src:"".concat("http://3.142.224.88:8000","/").concat(e.value),alt:"Image",className:"imageView"}):e.render("Cell")}))}))}))}))})):v||p.length?(0,y.jsx)(j.Z,{}):(0,y.jsx)("tr",{children:(0,y.jsx)("td",{className:"mt-4 text-center font-weight-bold",colSpan:6,children:(0,y.jsx)("h5",{children:"No data found"})})})]}))})}),(0,y.jsx)(S.Z,{onPageChange:function(e){z(e),Z(!0)},page:E,pages:I})]})),(0,y.jsx)(u.Z,{isOpen:ie,backdrop:!0,size:"lg",children:ie&&(0,y.jsx)(w,{isEdit:ue,editData:pe,onClose:function(){se(!1),de(!1),fe({})},toggleRefresh:function(e){return Z(e)}})}),(0,y.jsx)(u.Z,{isOpen:be,backdrop:!0,children:be&&(0,y.jsx)(k.Z,{isOpen:be,onClose:function(){return ve(!1)},confirmText:"Delete",cancelBtnBsStyle:" modalcancelbutton btn-secondary",message:"Are you sure you want to delete?",handleConfirm:function(){return Ue()}})}),(0,y.jsx)(u.Z,{isOpen:Be,backdrop:!0,children:Be&&(0,y.jsx)(k.Z,{isOpen:Be,onClose:function(){return Pe(!1)},confirmText:"Update",cancelBtnBsStyle:" modalcancelbutton btn-secondary",message:"Are you sure you want to Update Status?",handleConfirm:function(){return $e()}})}),F&&(0,y.jsx)(j.Z,{})]})]})})}))}}]);