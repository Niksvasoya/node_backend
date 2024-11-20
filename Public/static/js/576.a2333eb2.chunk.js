"use strict";(self.webpackChunktest_demo=self.webpackChunktest_demo||[]).push([[576],{5941:function(n,e,t){t(47313);var r=t(97520),o=t.n(r),a=t(46417);e.Z=function(n){var e=n.isOpen,t=n.onClose,r=n.confirmText,s=n.message,c=n.handleConfirm,i=n.cancleBtnTxt,l=n.customIcon,u=n.titleTxt,d=r||"Yes, delete it!",p=!!l;return(0,a.jsx)("div",{children:(0,a.jsx)(o(),{warning:!l,custom:p,showCancel:!0,show:e,confirmBtnText:d,confirmBtnBsStyle:"secondary btn-sm confirmBtn",cancelBtnBsStyle:"success btn-sm confirmBtn",title:u||"",customIcon:l,onConfirm:function(){c()},onCancel:t,cancelBtnText:i||"Cancel",children:s})})}},28767:function(n,e,t){var r,o=t(30168),a=t(17387).ZP.div(r||(r=(0,o.Z)(['\n  .tbl-loader {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.05);\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .lds-ring {\n      div {\n        width: 8px !important;\n        height: 45px !important;\n        margin: 0px !important;\n        border-color: #563c91 transparent transparent transparent !important;\n      }\n    }\n  }\n\n  .module-header {\n    display: flex;\n    align-items: center;\n    @media (max-width: 575.98px) {\n      display: block;\n      .react-form-input {\n        margin-top: 15px;\n        margin-bottom: 5px;\n      }\n      button {\n        margin: 0 !important;\n      }\n    }\n  }\n  table {\n    width: 100%;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  tr:nth-child(even) {\n    background: rgba(0, 0, 0, 0.03);\n  }\n\n  tr:nth-child(odd) {\n    background: rgba(255, 255, 255);\n  }\n\n  .table-container {\n    margin: auto 24px;\n    padding-bottom: 20px;\n  }\n  .custom-react-table-theme-class {\n    th {\n      min-width: 200px;\n    }\n    tbody {\n      td {\n        padding: 10px;\n        font-family: "muli-medium";\n        color: #757575;\n      }\n      td.wide-cell {\n        width: 150px;\n      }\n    }\n  }\n\n  .Table__itemCount {\n    font-size: 14px;\n  }\n\n  .Table__pagination {\n    display: flex;\n    justify-content: flex-end;\n    padding: 20px 24px;\n  }\n\n  .Table__pageButton {\n    font-size: 14px;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    color: #757575 !important;\n    margin: 0 5px;\n  }\n\n  .Table__pageButton:disabled {\n    cursor: not-allowed;\n    color: gray;\n  }\n\n  .Table__pageButton--active {\n    font-weight: bold;\n    background: #6ab664;\n    color: white !important;\n    width: 38px;\n    height: 29px;\n    border-radius: 6px;\n  }\n\n  .tabl-search {\n    padding: 4px;\n    margin: 10px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  .back-icon {\n    position: absolute;\n    right: 30px;\n    bottom: 27px;\n    color: #563c91;\n  }\n\n  .-sort-desc {\n    box-shadow: none !important;\n    &:before {\n      content: "\u25bc";\n      float: right;\n      margin-right: 14px;\n      color: #563c91;\n    }\n  }\n\n  .-sort-asc {\n    box-shadow: none !important;\n    &:before {\n      content: "\u25b2";\n      float: right;\n      margin-right: 14px;\n      color: #563c91;\n    }\n  }\n  .react-action-class.wide-cell {\n    width: 150px;\n  }\n  .react-action-class {\n    button {\n      height: auto !important;\n      width: auto !important;\n    }\n  }\n  .break-word {\n    word-break: break-word;\n  }\n'])));e.Z=a},41576:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r=t(1413),o=t(36459),a=t(74165),s=t(15861),c=t(29439),i=t(47313),l=t(1084),u=t(70816),d=t.n(u),p=t(36749),h=t(20086),f=function(n,e){return(0,h.hi)(n).delete("/admin/role/deleteRole/".concat(e)).then(h._y).catch(h.S3)},m=function(n,e,t){return(0,h.hi)(n).put("/admin/role/updateRole/".concat(e),t).then(h._y).catch(h.S3)},x=function(n,e){return(0,h.hi)(n).post("/admin/role/add",e).then(h._y).catch(h.S3)},b=t(45110),g=t(42995),Z=t(5211),j=t(28767),v=t(9038),w=t(12756),y=t(12213),k=t(79429),C=t(15869),S=(0,k.j0)({validationSchema:C.Ry().shape({roleName:C.Z_().required("Please enter role")}),mapPropsToValues:function(n){return{roleName:""}},validateOnMount:!0,handleSubmit:function(n){},displayName:"RoleValidationForm",enableReinitialize:!0}),N=t(46417),T=p.Z.success,B=p.Z.error,_=p.Z.fetching,R=(0,v.qC)(S,(0,l.$j)((function(n){return(0,r.Z)((0,r.Z)({},n.themeChanger),{},{token:n.auth.accessToken})}),{success:T,error:B,fetching:_}))((function(n){var e=n.isEdit,t=n.editData,o=n.onClose,l=n.values,u=n.handleChange,d=n.handleBlur,p=n.errors,h=n.touched,f=n.submitCount,b=n.token,g=n.isValid,Z=n.setValues,j=n.handleSubmit,v=n.toggleRefresh,k=(n.setFieldValue,(0,i.useState)(!1)),C=(0,c.Z)(k,2),S=C[0],_=C[1];(0,i.useEffect)((function(){e&&Z((0,r.Z)({},t))}),[t]);var R=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),j(),g){n.next=4;break}return n.abrupt("return");case 4:if(r={roleName:l.roleName.toLowerCase()},_(!0),!e){n.next=11;break}return n.next=9,m(b,l._id,r).then((function(n){n.success?(T(n.message),v(!0),_(!1),o()):(B(n.message),_(!1))}));case 9:n.next=13;break;case 11:return n.next=13,x(b,r).then((function(n){n.success?(T(n.message),_(!1),v(!0),o()):(B(n.message),_(!1),v(!0))}));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),A=function(n){var e=n.field;return p[e]&&h[e]||f>0?(0,N.jsx)("span",{className:n.class?n.class:"error-msg",children:p[e]}):(0,N.jsx)("span",{})};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(w.Z,{toggle:function(){return o()},children:[e?"Edit":"Add"," Roles"]}),(0,N.jsx)(y.Z,{children:(0,N.jsxs)("form",{children:[(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsxs)("label",{children:["Role ",(0,N.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),(0,N.jsx)("input",{type:"text",className:"form-control react-form-input",id:"roleName",onChange:u,onBlur:d,value:l.roleName,placeholder:"Role "}),(0,N.jsx)(A,{field:"roleName"})]}),(0,N.jsxs)("div",{className:"row justify-content-center",children:[(0,N.jsx)("button",{type:"submit",onClick:function(n){return R(n)},className:"btn btn-success mx-3 btnsize",disabled:S,children:"Save"}),(0,N.jsx)("button",{type:"submit",className:"btn btn-secondary btnsize",onClick:function(){o()},children:"Cancel"})]})]})})]})})),A=t(78911),P=t(5941),z=t(59884),H=t(14303),O=t(41612),D=p.Z.success,E=p.Z.error,V=p.Z.fetching,Y=function(n){var e=n.title;return(0,N.jsx)("div",{children:e})},F=(0,v.qC)((0,l.$j)((function(n){return console.log(n.role),{accessToken:n.auth.accessToken}}),{success:D,error:E,fetching:V}))((function(n){var e=n.accessToken,t=n.error,l=n.success,u=n.fetching,p=(0,i.useState)([]),x=(0,c.Z)(p,2),v=x[0],w=x[1],y=(0,i.useState)({}),k=(0,c.Z)(y,2),C=k[0],S=k[1],T=(0,i.useState)(!1),B=(0,c.Z)(T,2),_=B[0],D=B[1],E=(0,i.useState)(!1),V=(0,c.Z)(E,2),F=V[0],M=V[1],q=(0,i.useState)(""),I=(0,c.Z)(q,2),G=I[0],U=I[1],$=(0,i.useState)(""),L=(0,c.Z)($,2),W=L[0],J=L[1],K=(0,i.useState)(""),Q=(0,c.Z)(K,2),X=Q[0],nn=Q[1],en=(0,i.useState)(!0),tn=(0,c.Z)(en,2),rn=tn[0],on=tn[1],an=(0,i.useState)(!1),sn=(0,c.Z)(an,2),cn=sn[0],ln=sn[1],un=(0,i.useState)(),dn=(0,c.Z)(un,2),pn=dn[0],hn=dn[1],fn=(0,i.useState)(),mn=(0,c.Z)(fn,2),xn=mn[0],bn=mn[1],gn=(0,i.useCallback)((0,s.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return ln(!0),n.next=3,(r=e,(0,h.hi)(r).get("/admin/role/getRoles").then(h._y).catch(h.S3)).then((function(n){console.log(n.data,"the data"),w(n.data),on(!1),ln(!1)})).catch((function(n){t(n.message),ln(!1)}));case 3:case"end":return n.stop()}var r}),n)}))),[]);(0,i.useEffect)((function(){rn&&gn()}),[rn]);var Zn=(0,i.useMemo)((function(){return[{Header:function(n){return(0,N.jsx)(Y,{title:"Role"})},accessor:"roleName"},{Header:function(n){return(0,N.jsx)(Y,{title:"Create At"})},accessor:"createdAt",Cell:function(n){return d()(n.cell.value).format("YYYY-MM-DD")}},{Header:function(n){return(0,N.jsx)(Y,{title:"Status"})},accessor:"isActive",Cell:function(n,e){return(0,N.jsx)("div",{children:(0,N.jsx)(O.Z,{checked:!!n.cell.value,onClick:function(){J(n.cell.row.original._id),nn(n.cell.value),bn(!0)},color:"success"})})}},{Header:function(n){return(0,N.jsx)(Y,{title:"Action"})},accessor:"actions",Cell:function(n,e){return(0,N.jsxs)("div",{className:" d-flex ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(z.Z,{size:18,onClick:function(){M(!0),D(!0),S(null===n||void 0===n?void 0:n.row.original)},className:"action-edit "})}),(0,N.jsx)("div",{className:"ml-3",children:(0,N.jsx)(H.Z,{className:"action-delete","background-color":"#ffe5e5",size:20,color:"red",onClick:function(){var e;hn(!0),U(null===(e=n.row.original)||void 0===e?void 0:e._id)}})})]})}}]}),[]),jn=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={isActive:!X},u(),n.next=5,m(e,W,t);case 5:n.sent.success&&(bn(!1),l("Success"),on(!0));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),vn=(0,b.useTable)({data:v,columns:Zn,manualSortBy:!0}),wn=vn.getTableProps,yn=vn.getTableBodyProps,kn=vn.prepareRow,Cn=vn.rows,Sn=vn.headerGroups;(0,o.Z)(vn.state);var Nn=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(),n.next=3,f(e,G);case 3:(r=n.sent).success&&(hn(!1),l(r.message),on(!0));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"col-auto  d-flex justify-content-end",children:(0,N.jsx)("div",{style:{width:"initial"},children:(0,N.jsxs)("button",{type:"submit",className:" btn btn-success w-10 addbtncolor",onClick:function(){M(!1),D(!0)},children:[(0,N.jsx)(Z.Z,{className:"mr-2"}),"Add Roles"]})})}),(0,N.jsx)(j.Z,(0,r.Z)((0,r.Z)({},n),{},{children:(0,N.jsx)("div",{className:"table-responsive table-white-box mt-2",children:(0,N.jsx)("div",{style:{maxHeight:"calc(100vh - 250px)",position:"relative"},children:(0,N.jsxs)("table",(0,r.Z)((0,r.Z)({className:"table justify-content-center"},wn()),{},{children:[(0,N.jsx)("thead",{style:{position:"sticky",top:"-20px",zIndex:1},children:Sn.map((function(n){return(0,N.jsx)("tr",(0,r.Z)((0,r.Z)({className:"thead-color"},n.getHeaderGroupProps()),{},{children:n.headers.map((function(n){return(0,N.jsx)("th",(0,r.Z)((0,r.Z)({},n.getHeaderProps()),{},{children:(0,N.jsx)("div",{children:n.render("Header")})}))}))}))}))}),(0,N.jsx)("tbody",(0,r.Z)((0,r.Z)({},yn()),{},{children:Cn.map((function(n){return kn(n),(0,N.jsx)("tr",(0,r.Z)((0,r.Z)({},n.getRowProps()),{},{children:n.cells.map((function(n){return(0,N.jsx)("td",(0,r.Z)((0,r.Z)({},n.getCellProps()),{},{children:n.render("Cell")}))}))}))}))}))]}))})})})),(0,N.jsx)(g.Z,{isOpen:_,backdrop:!0,children:_&&(0,N.jsx)(R,{isEdit:F,editData:C,onClose:function(){D(!1),M(!1),S({})},toggleRefresh:function(n){return on(n)}})}),(0,N.jsx)(g.Z,{isOpen:xn,backdrop:!0,children:xn&&(0,N.jsx)(P.Z,{isOpen:xn,onClose:function(){return bn(!1)},confirmText:"Update",cancelBtnBsStyle:" modalcancelbutton btn-secondary",message:"Are you sure you want to Update Status?",handleConfirm:function(){return jn()}})}),(0,N.jsx)(g.Z,{isOpen:pn,backdrop:!0,children:pn&&(0,N.jsx)(P.Z,{isOpen:pn,onClose:function(){return hn(!1)},confirmText:"Delete",cancelBtnBsStyle:" modalcancelbutton btn-secondary",message:"Are you sure you want to delete?",handleConfirm:function(){return Nn()}})}),cn&&(0,N.jsx)(A.Z,{})]})}))},36459:function(n,e,t){function r(n){if(null==n)throw new TypeError("Cannot destructure "+n)}t.d(e,{Z:function(){return r}})}}]);