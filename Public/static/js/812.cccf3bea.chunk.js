"use strict";(self.webpackChunktest_demo=self.webpackChunktest_demo||[]).push([[812],{83792:function(e,n,t){var a=t(29439),r=t(1413),o=t(47313),i=t(26418),c=t(23486),s=t(46417),l=function(e){return(0,s.jsx)("button",(0,r.Z)((0,r.Z)({},e),{},{children:e.children}))};n.Z=function(e){var n=(0,o.useState)(null),t=(0,a.Z)(n,2),r=t[0],d=t[1],u=e.PageButtonComponent,p=void 0===u?l:u,h=e.changeMethodFlag,m=e.onPageChange,f=e.page,g=e.resetMethodFlag,x=e.page+1,v=(0,o.useCallback)((function(e,n){return n<7?b([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[]);(0,o.useEffect)((function(){d(v(null,e.pages))}),[v,e.pages]),(0,o.useEffect)((function(){h&&(0===f?(m(null),m(0)):m(0),g())}),[h,m,f,g]);var b=function(e,n){return e.filter((function(e){return e<=n}))},Z=function(n){if(n!==e.page+1){var t=v(n,e.pages);d(b(t,e.pages)),e.onPageChange(n-1)}};return(0,s.jsxs)("div",{className:"Table__pagination",children:[(0,s.jsx)("div",{className:"Table__prevPageWrapper",children:(0,s.jsx)(p,{className:"Table__pageButton",onClick:function(){1!==x&&Z(x-1)},disabled:1===x,children:(0,s.jsx)(i.Z,{size:18})})}),(0,s.jsx)("div",{className:"Table__visiblePagesWrapper",children:r&&r.map((function(e,n,t){return(0,s.jsx)(p,{className:x===e?"Table__pageButton Table__pageButton--active":"Table__pageButton",onClick:Z.bind(null,e),children:t[n-1]+2<e?"...".concat(e):e},e)}))}),(0,s.jsx)("div",{className:"Table__nextPageWrapper",children:(0,s.jsx)(p,{className:"Table__pageButton",onClick:function(){x!==e.pages&&Z(x+1)},disabled:x===e.pages,children:(0,s.jsx)(c.Z,{size:18})})})]})}},5941:function(e,n,t){t(47313);var a=t(97520),r=t.n(a),o=t(46417);n.Z=function(e){var n=e.isOpen,t=e.onClose,a=e.confirmText,i=e.message,c=e.handleConfirm,s=e.cancleBtnTxt,l=e.customIcon,d=e.titleTxt,u=a||"Yes, delete it!",p=!!l;return(0,o.jsx)("div",{children:(0,o.jsx)(r(),{warning:!l,custom:p,showCancel:!0,show:n,confirmBtnText:u,confirmBtnBsStyle:"secondary btn-sm confirmBtn",cancelBtnBsStyle:"success btn-sm confirmBtn",title:d||"",customIcon:l,onConfirm:function(){c()},onCancel:t,cancelBtnText:s||"Cancel",children:i})})}},28767:function(e,n,t){var a,r=t(30168),o=t(17387).ZP.div(a||(a=(0,r.Z)(['\n  .tbl-loader {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.05);\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .lds-ring {\n      div {\n        width: 8px !important;\n        height: 45px !important;\n        margin: 0px !important;\n        border-color: #563c91 transparent transparent transparent !important;\n      }\n    }\n  }\n\n  .module-header {\n    display: flex;\n    align-items: center;\n    @media (max-width: 575.98px) {\n      display: block;\n      .react-form-input {\n        margin-top: 15px;\n        margin-bottom: 5px;\n      }\n      button {\n        margin: 0 !important;\n      }\n    }\n  }\n  table {\n    width: 100%;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  tr:nth-child(even) {\n    background: rgba(0, 0, 0, 0.03);\n  }\n\n  tr:nth-child(odd) {\n    background: rgba(255, 255, 255);\n  }\n\n  .table-container {\n    margin: auto 24px;\n    padding-bottom: 20px;\n  }\n  .custom-react-table-theme-class {\n    th {\n      min-width: 200px;\n    }\n    tbody {\n      td {\n        padding: 10px;\n        font-family: "muli-medium";\n        color: #757575;\n      }\n      td.wide-cell {\n        width: 150px;\n      }\n    }\n  }\n\n  .Table__itemCount {\n    font-size: 14px;\n  }\n\n  .Table__pagination {\n    display: flex;\n    justify-content: flex-end;\n    padding: 20px 24px;\n  }\n\n  .Table__pageButton {\n    font-size: 14px;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    color: #757575 !important;\n    margin: 0 5px;\n  }\n\n  .Table__pageButton:disabled {\n    cursor: not-allowed;\n    color: gray;\n  }\n\n  .Table__pageButton--active {\n    font-weight: bold;\n    background: #6ab664;\n    color: white !important;\n    width: 38px;\n    height: 29px;\n    border-radius: 6px;\n  }\n\n  .tabl-search {\n    padding: 4px;\n    margin: 10px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  .back-icon {\n    position: absolute;\n    right: 30px;\n    bottom: 27px;\n    color: #563c91;\n  }\n\n  .-sort-desc {\n    box-shadow: none !important;\n    &:before {\n      content: "\u25bc";\n      float: right;\n      margin-right: 14px;\n      color: #563c91;\n    }\n  }\n\n  .-sort-asc {\n    box-shadow: none !important;\n    &:before {\n      content: "\u25b2";\n      float: right;\n      margin-right: 14px;\n      color: #563c91;\n    }\n  }\n  .react-action-class.wide-cell {\n    width: 150px;\n  }\n  .react-action-class {\n    button {\n      height: auto !important;\n      width: auto !important;\n    }\n  }\n  .break-word {\n    word-break: break-word;\n  }\n'])));n.Z=o},93997:function(e,n,t){t.d(n,{$Q:function(){return s},E9:function(){return o},Se:function(){return u},gt:function(){return p},hw:function(){return l},sZ:function(){return d},ws:function(){return i},xq:function(){return c},y0:function(){return r}});var a=t(20086),r=function(e,n){return(0,a.hi)(e).get("/location/state/getState?page=".concat(n.currentPage,"&limit=").concat(n.limit,"&search=").concat(n.search,"&sortField=").concat(n.sortBy,"&sortOrder=").concat(n.sortOrder)).then(a._y).catch(a.S3)},o=function(e,n){return(0,a.hi)(e).post("/location/state/addState",n).then(a._y).catch(a.S3)},i=function(e,n){return(0,a.hi)(e).delete("/location/state/deleteState/".concat(n)).then(a._y).catch(a.S3)},c=function(e,n,t){return(0,a.hi)(e).put("location/state/updateState/".concat(t),n).then(a._y).catch(a.S3)},s=function(e,n,t){return(0,a.hi)(e).put("location/city/updateCity/".concat(n),t).then(a._y).catch(a.S3)},l=function(e,n){return(0,a.hi)(e).get("/location/city/getCity?page=".concat(n.currentPage,"&search=").concat(n.search,"&sortField=").concat(n.sortBy,"&sortOrder=").concat(n.sortOrder)).then(a._y).catch(a.S3)},d=function(e,n){return(0,a.hi)(e).post("/location/city/addCity",n).then(a._y).catch(a.S3)},u=function(e,n){return(0,a.hi)(e).delete("/location/city/deleteCity/".concat(n)).then(a._y).catch(a.S3)},p=function(e){return(0,a.hi)(e).get("/location/state/getState?&sortField=name&limit=100").then(a._y).catch(a.S3)}},41812:function(e,n,t){t.r(n),t.d(n,{default:function(){return se}});var a=t(1413),r=t(74165),o=t(15861),i=t(29439),c=t(47313),s=t(28767),l=t(9038),d=t(42995),u=t(1084),p=t(12756),h=t(12213),m=t(79429),f=t(15869),g=(0,m.j0)({validationSchema:f.Ry().shape({name:f.Z_().required("Please enter city name").matches(/^[a-zA-Z]+$/,"City name must contain only letters"),image:f.nK().required("Please upload image"),pincode:f.Rx().typeError("Pincode must be a number").required("Please enter pincode").positive("Pincode must be a positive number").integer("Pincode must be an integer"),state_id:f.Z_().required("Please select a state")}),mapPropsToValues:function(e){return{name:"",pincode:"",state_id:"",image:""}},validateOnMount:!0,handleSubmit:function(e){},displayName:"CityValidationForm",enableReinitialize:!0}),x=t(11585),v=t(93997),b=t(36749),Z=t(78911),S=t(46417),y="http://3.142.224.88:8000",j=b.Z.success,C=b.Z.error,w=b.Z.fetching,k=(0,l.qC)(g,(0,u.$j)((function(e){return(0,a.Z)((0,a.Z)({},e.themeChanger),{},{token:e.auth.accessToken})}),{success:j,error:C,fetching:w}))((function(e){var n=e.isEdit,t=e.editData,s=e.onClose,l=e.values,d=e.handleChange,u=e.handleBlur,m=e.errors,f=e.touched,g=e.submitCount,b=e.token,Z=e.isValid,w=e.setValues,k=e.handleSubmit,z=e.toggleRefresh,N=e.setFieldValue,_=(0,c.useState)(!1),B=(0,i.Z)(_,2),P=B[0],T=B[1],I=(0,c.useState)([]),R=(0,i.Z)(I,2),E=R[0],F=R[1],O=(0,c.useState)(),W=(0,i.Z)(O,2),M=W[0],A=W[1],V=(0,c.useState)(!1),q=(0,i.Z)(V,2),L=q[0],H=q[1];(0,c.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.gt)(b).then((function(e){e.success?F(e.data.docs.map((function(e){return{value:e._id,label:e.name}}))):C(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){n&&w((0,a.Z)({},t)),A(t.image)}),[t]);var D=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k(),Z){e.next=4;break}return e.abrupt("return");case 4:if((a=new FormData).append("name",l.name.toLowerCase()),a.append("image",l.image),a.append("pincode",l.pincode),a.append("state_id",l.state_id),T(!0),!n){e.next=15;break}return e.next=13,(0,v.$Q)(b,l._id,a).then((function(e){e.success?(j(e.message),z(!0),T(!1),s()):(C(e.message),T(!1))}));case 13:e.next=17;break;case 15:return e.next=17,(0,v.sZ)(b,a).then((function(e){e.success?(j(e.message),T(!1),z(!0),s()):(C(e.message),T(!1),z(!0))}));case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(e){var n=e.field;return m[n]&&f[n]||g>0?(0,S.jsx)("span",{className:e.class?e.class:"error-msg",children:m[n]}):(0,S.jsx)("span",{})};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(p.Z,{toggle:function(){return s()},children:[n?"Edit":"Add"," City"]}),(0,S.jsx)(h.Z,{children:(0,S.jsxs)("form",{children:[(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsxs)("label",{children:["Choose State ",(0,S.jsx)("span",{className:"RedClass",children:"*"})]}),E.length>0&&(0,S.jsx)(x.ZP,{options:E.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{label:e.label.charAt(0).toUpperCase()+e.label.slice(1)})})),onChange:function(e){N("state_id",e.value)},value:E.find((function(e){return e.value===l.state_id}))}),(0,S.jsx)(U,{field:"state_id"})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsxs)("label",{children:["City Name",(0,S.jsx)("span",{className:"RedClass",children:"*"})]}),(0,S.jsx)("input",{type:"text",className:"form-control react-form-input",id:"name",onChange:d,onBlur:u,value:l.name,placeholder:"City Name"}),(0,S.jsx)(U,{field:"name"})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsxs)("label",{children:["Pin Code",(0,S.jsx)("span",{className:"RedClass",children:"*"})]}),(0,S.jsx)("input",{type:"text",className:"form-control react-form-input",id:"pincode",onChange:d,onBlur:u,value:l.pincode,placeholder:"Pin Code"}),(0,S.jsx)(U,{field:"pincode"})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsxs)("label",{children:["Image ",(0,S.jsx)("span",{className:"RedClass",children:"*"})]}),(0,S.jsx)("div",{className:"d-flex flex-row",children:(0,S.jsx)("input",{type:"file",id:"image",className:"form-control react-form-input",accept:".jpg,.png,.jpeg,.svg",onChange:function(e){if(e.target.files[0]){N("image",e.target.files[0]);var n=URL.createObjectURL(e.target.files[0]);A(n),H(!0)}},onBlur:u})}),(0,S.jsx)(U,{field:"image"}),(0,S.jsx)("div",{children:n&&!L?(0,S.jsx)("a",{href:"".concat(y,"/").concat(M),target:"_blank",rel:"noopener noreferrer",children:(0,S.jsx)("div",{className:"h-80 d-inline-block rounded-0",children:(0,S.jsx)("img",{src:"".concat(y,"/").concat(M),alt:"...",className:"previewImage rounded-0"})})}):L&&(0,S.jsx)("a",{href:M,target:"_blank",rel:"noopener noreferrer",children:(0,S.jsx)("div",{className:"h-80 d-inline-block rounded-0",children:(0,S.jsx)("img",{src:M,alt:"Preview",className:"rounded-0 previewImage"})})})})]}),(0,S.jsxs)("div",{className:"row justify-content-center",children:[(0,S.jsx)("button",{color:"success",onClick:function(e){return D(e)},type:"submit",className:"btn btn-success mx-3 btnsize",disabled:P,children:n?"Update":"Save"}),(0,S.jsx)("button",{onClick:function(){s()},className:"btn btn-secondary btnsize",children:"Cancel"})]})]})})]})})),z=t(66707),N=(t(28444),t(4942)),_=t(63366),B=t(87462),P=t(94146),T=t(29023),I=t(21921),R=t(17551),E=t(88564),F=t(29394),O=t(73362),W=t(91615),M=t(77430),A=t(32298);function V(e){return(0,A.Z)("MuiButton",e)}var q=(0,M.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var L=c.createContext({}),H=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],D=function(e){return(0,B.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},U=(0,E.ZP)(O.Z,{shouldForwardProp:function(e){return(0,E.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["".concat(t.variant).concat((0,W.Z)(t.color))],n["size".concat((0,W.Z)(t.size))],n["".concat(t.variant,"Size").concat((0,W.Z)(t.size))],"inherit"===t.color&&n.colorInherit,t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth]}})((function(e){var n,t,a,r=e.theme,o=e.ownerState,i="light"===r.palette.mode?r.palette.grey[300]:r.palette.grey[800],c="light"===r.palette.mode?r.palette.grey.A100:r.palette.grey[700];return(0,B.Z)({},r.typography.button,(n={minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":(0,B.Z)({textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[o.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat((r.vars||r).palette[o.color].main),backgroundColor:r.vars?"rgba(".concat(r.vars.palette[o.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:r.vars?r.vars.palette.Button.inheritContainedHoverBg:c,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(r.vars||r).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[o.color].main}}),"&:active":(0,B.Z)({},"contained"===o.variant&&{boxShadow:(r.vars||r).shadows[8]})},(0,N.Z)(n,"&.".concat(q.focusVisible),(0,B.Z)({},"contained"===o.variant&&{boxShadow:(r.vars||r).shadows[6]})),(0,N.Z)(n,"&.".concat(q.disabled),(0,B.Z)({color:(r.vars||r).palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)},"contained"===o.variant&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})),n),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(r.vars||r).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(r.vars||r).palette[o.color].main,border:r.vars?"1px solid rgba(".concat(r.vars.palette[o.color].mainChannel," / 0.5)"):"1px solid ".concat((0,R.Fq)(r.palette[o.color].main,.5))},"contained"===o.variant&&{color:r.vars?r.vars.palette.text.primary:null==(t=(a=r.palette).getContrastText)?void 0:t.call(a,r.palette.grey[300]),backgroundColor:r.vars?r.vars.palette.Button.inheritContainedBg:i,boxShadow:(r.vars||r).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(r.vars||r).palette[o.color].contrastText,backgroundColor:(r.vars||r).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var n;return e.ownerState.disableElevation&&(n={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,N.Z)(n,"&.".concat(q.focusVisible),{boxShadow:"none"}),(0,N.Z)(n,"&:active",{boxShadow:"none"}),(0,N.Z)(n,"&.".concat(q.disabled),{boxShadow:"none"}),n)})),$=(0,E.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,n){var t=e.ownerState;return[n.startIcon,n["iconSize".concat((0,W.Z)(t.size))]]}})((function(e){var n=e.ownerState;return(0,B.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===n.size&&{marginLeft:-2},D(n))})),Q=(0,E.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,n){var t=e.ownerState;return[n.endIcon,n["iconSize".concat((0,W.Z)(t.size))]]}})((function(e){var n=e.ownerState;return(0,B.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===n.size&&{marginRight:-2},D(n))})),G=c.forwardRef((function(e,n){var t=c.useContext(L),a=(0,T.Z)(t,e),r=(0,F.Z)({props:a,name:"MuiButton"}),o=r.children,i=r.color,s=void 0===i?"primary":i,l=r.component,d=void 0===l?"button":l,u=r.className,p=r.disabled,h=void 0!==p&&p,m=r.disableElevation,f=void 0!==m&&m,g=r.disableFocusRipple,x=void 0!==g&&g,v=r.endIcon,b=r.focusVisibleClassName,Z=r.fullWidth,y=void 0!==Z&&Z,j=r.size,C=void 0===j?"medium":j,w=r.startIcon,k=r.type,z=r.variant,N=void 0===z?"text":z,R=(0,_.Z)(r,H),E=(0,B.Z)({},r,{color:s,component:d,disabled:h,disableElevation:f,disableFocusRipple:x,fullWidth:y,size:C,type:k,variant:N}),O=function(e){var n=e.color,t=e.disableElevation,a=e.fullWidth,r=e.size,o=e.variant,i=e.classes,c={root:["root",o,"".concat(o).concat((0,W.Z)(n)),"size".concat((0,W.Z)(r)),"".concat(o,"Size").concat((0,W.Z)(r)),"inherit"===n&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,W.Z)(r))],endIcon:["endIcon","iconSize".concat((0,W.Z)(r))]},s=(0,I.Z)(c,V,i);return(0,B.Z)({},i,s)}(E),M=w&&(0,S.jsx)($,{className:O.startIcon,ownerState:E,children:w}),A=v&&(0,S.jsx)(Q,{className:O.endIcon,ownerState:E,children:v});return(0,S.jsxs)(U,(0,B.Z)({ownerState:E,className:(0,P.Z)(t.className,O.root,u),component:d,disabled:h,focusRipple:!x,focusVisibleClassName:(0,P.Z)(O.focusVisible,b),ref:n,type:k},R,{classes:O,children:[M,o,A]}))})),K=t(45110),Y=t(83792),J=t(5211),X=t(5941),ee=t(23837),ne=t(59884),te=t(14303),ae=t(41612),re="http://3.142.224.88:8000",oe=((0,E.ZP)(G)((function(e){return{color:e.theme.palette.getContrastText(ee.Z[600]),backgroundColor:ee.Z[500],"&:hover":{backgroundColor:ee.Z[700]}}})),z.Z.success),ie=z.Z.error,ce=z.Z.fetching,se=(0,l.qC)((0,u.$j)((function(e){return{accessToken:e.auth.accessToken}}),{success:oe,error:ie,fetching:ce}))((function(e){var n=e.accessToken,t=e.error,l=e.success,u=e.fetching,p=(0,c.useState)([]),h=(0,i.Z)(p,2),m=h[0],f=h[1],g=(0,c.useState)(!0),x=(0,i.Z)(g,2),b=x[0],y=x[1],j=(0,c.useState)(!1),C=(0,i.Z)(j,2),w=C[0],z=C[1],N=(0,c.useState)(0),_=(0,i.Z)(N,2),B=_[0],P=_[1],T=(0,c.useState)(1),I=(0,i.Z)(T,2),R=I[0],E=I[1],F=(0,c.useState)(10),O=(0,i.Z)(F,2),W=O[0],M=(O[1],(0,c.useState)("")),A=(0,i.Z)(M,2),V=A[0],q=A[1],L=(0,c.useState)(""),H=(0,i.Z)(L,2),D=H[0],U=H[1],$=(0,c.useState)("asc"),Q=(0,i.Z)($,2),G=Q[0],ee=Q[1],oe=(0,c.useState)(!1),ie=(0,i.Z)(oe,2),ce=ie[0],se=ie[1],le=(0,c.useState)(!1),de=(0,i.Z)(le,2),ue=de[0],pe=de[1],he=(0,c.useState)({}),me=(0,i.Z)(he,2),fe=me[0],ge=me[1],xe=(0,c.useState)(),ve=(0,i.Z)(xe,2),be=ve[0],Ze=ve[1],Se=(0,c.useState)(""),ye=(0,i.Z)(Se,2),je=ye[0],Ce=ye[1],we=(0,c.useState)(),ke=(0,i.Z)(we,2),ze=ke[0],Ne=ke[1],_e=(0,c.useState)(""),Be=(0,i.Z)(_e,2),Pe=Be[0],Te=Be[1],Ie=(0,c.useState)(""),Re=(0,i.Z)(Ie,2),Ee=Re[0],Fe=Re[1],Oe=function(e){var n=e.title,t=e.renderSortArrow;return(0,S.jsxs)("div",{children:[n,t&&t()]})},We=(0,c.useMemo)((function(){return[{Header:function(e){return(0,S.jsx)(Oe,{title:"City Name",renderSortArrow:function(){return Qe(e.column.id)}})},accessor:"name"},{Header:function(e){return(0,S.jsx)(Oe,{title:"Image"})},accessor:"image"},{Header:function(e){return(0,S.jsx)(Oe,{title:"Pin-Code",renderSortArrow:function(){return Qe(e.column.id)}})},accessor:"pincode"},{Header:function(e){return(0,S.jsx)(Oe,{title:"State Name",renderSortArrow:function(){return Qe(e.column.id)}})},accessor:"stateName"},{Header:function(e){return(0,S.jsx)(Oe,{title:"Status"})},accessor:"isActive",Cell:function(e,n){return(0,S.jsx)("div",{children:(0,S.jsx)(ae.Z,{checked:!!e.cell.value,onClick:function(){Te(e.cell.row.original._id),Fe(e.cell.value),Ne(!0)},color:"success"})})}},{Header:function(e){return(0,S.jsx)(Oe,{title:"Action"})},accessor:"actions",Cell:function(e){return(0,S.jsxs)("div",{className:" d-flex",children:[(0,S.jsx)("div",{children:(0,S.jsx)(ne.Z,{size:18,onClick:function(){pe(!0),se(!0),ge(null===e||void 0===e?void 0:e.row.original)},className:"action-edit "})}),(0,S.jsx)("div",{className:"ml-3",children:(0,S.jsx)(te.Z,{size:20,className:"action-delete",onClick:function(){var n;Ze(!0),Ce(null===(n=e.row.original)||void 0===n?void 0:n._id)}})})]})}}]}),[b]),Me=(0,K.useTable)({data:m,columns:We,manualSortBy:!0,initialState:{pageSize:W,pageIndex:0}},K.useSortBy,K.usePagination),Ae=Me.getTableProps,Ve=Me.getTableBodyProps,qe=Me.prepareRow,Le=Me.rows,He=(Me.state.pageIndex,Me.headerGroups),De=(0,c.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),a={currentPage:B+1,search:V,sortBy:D,sortOrder:G},e.next=4,(0,v.hw)(n,a).then((function(e){e.success?(f(e.data.docs),E(e.data.totalPages),y(!1),z(!1)):t(e.message)}));case 4:case"end":return e.stop()}}),e)})))),Ue=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isActive:!Ee},u(),e.next=5,(0,v.$Q)(n,Pe,t);case 5:e.sent.success&&(Ne(!1),l("Success"),y(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){b&&De()}),[b,B]),(0,c.useEffect)((function(){if(void 0!==V){var e=setTimeout((function(){return P(0)}),De(),100);return function(){return clearTimeout(e)}}}),[V]);var $e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,(0,v.Se)(n,je);case 3:(a=e.sent).success&&(Ze(!1),l(a.message),y(!0));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Qe=function(e){return e!==D?null:"asc"!==G?(0,S.jsx)("i",{className:"fa fa-sort-down ml-1 text-dark"}):(0,S.jsx)("i",{className:"fa fa-sort-up ml-1 text-dark"})};return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:"row ",children:[(0,S.jsxs)("div",{className:" col-12 d-flex justify-content-end",children:[(0,S.jsx)("div",{className:"mt-3",children:(0,S.jsx)("input",{className:"form-control react-form-input ",type:"search",placeholder:"Search City",onChange:function(e){q(e.target.value)}})}),(0,S.jsx)("div",{className:"mt-3 ml-3",children:(0,S.jsxs)("button",{type:"submit",className:" btn btn-success w-10 addbtncolor",onClick:function(){pe(!1),se(!0)},children:[(0,S.jsx)(J.Z,{className:"mr-2"}),"Add City"]})})]}),(0,S.jsxs)("div",{className:"col-12 mt-3",children:[(0,S.jsxs)(s.Z,(0,a.Z)((0,a.Z)({},e),{},{children:[(0,S.jsx)("div",{className:"table-responsive table-white-box",children:(0,S.jsx)("div",{style:{height:"calc(100vh - 250px)",position:"relative"},children:(0,S.jsxs)("table",(0,a.Z)((0,a.Z)({className:"table"},Ae()),{},{children:[(0,S.jsx)("thead",{style:{position:"sticky",top:"-20px",zIndex:1},children:He.map((function(e){return(0,S.jsx)("tr",(0,a.Z)((0,a.Z)({className:"thead-color"},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,S.jsx)("th",(0,a.Z)((0,a.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{onClick:function(){var n;"id"!==(n=e.id)&&(D===n?(ee("asc"===G?"desc":"asc"),y(!0)):(U(n),ee("asc"),y(!0)))},children:(0,S.jsx)("div",{children:e.render("Header")})}))}))}))}))}),m.length?(0,S.jsx)("tbody",(0,a.Z)((0,a.Z)({},Ve()),{},{children:Le.map((function(e){return qe(e),(0,S.jsx)("tr",(0,a.Z)((0,a.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,S.jsx)("td",(0,a.Z)((0,a.Z)({},e.getCellProps()),{},{children:"image"===e.column.id?e.value?(0,S.jsx)("img",{src:"".concat(re,"/").concat(e.value),alt:"Image",className:"imageView"}):(0,S.jsx)("img",{style:{height:"40px",width:"100px"},src:"".concat(re,"/Frame 1.png"),alt:"Default Image",className:"defaultImageView"}):e.render("Cell")}))}))}))}))})):b||m.length?(0,S.jsx)(Z.Z,{}):(0,S.jsx)("tr",{children:(0,S.jsx)("td",{className:"mt-4 text-center font-weight-bold",colSpan:6,children:(0,S.jsx)("h5",{children:"No data found"})})})]}))})}),(0,S.jsx)(Y.Z,{onPageChange:function(e){P(e),y(!0)},page:B,pages:R})]})),(0,S.jsx)(d.Z,{isOpen:ce,backdrop:!0,children:ce&&(0,S.jsx)(k,{isEdit:ue,editData:fe,onClose:function(){se(!1),pe(!1),ge({})},toggleRefresh:function(e){return y(e)}})}),(0,S.jsx)(d.Z,{isOpen:be,backdrop:!0,children:be&&(0,S.jsx)(X.Z,{isOpen:be,onClose:function(){return Ze(!1)},confirmText:"Delete",cancelBtnBsStyle:" modalcancelbutton btn btn-secondary",message:"Are you sure you want to delete?",handleConfirm:function(){return $e()}})}),(0,S.jsx)(d.Z,{isOpen:ze,backdrop:!0,children:ze&&(0,S.jsx)(X.Z,{isOpen:ze,onClose:function(){return Ne(!1)},confirmText:"Update",cancelBtnBsStyle:" modalcancelbutton btn-secondary",message:"Are you sure you want to Update Status?",handleConfirm:function(){return Ue()}})}),w&&(0,S.jsx)(Z.Z,{})]})]})})}))}}]);