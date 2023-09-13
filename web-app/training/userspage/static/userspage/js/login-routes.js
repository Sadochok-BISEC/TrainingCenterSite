"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7770],{44677:function(t,r,i){i.d(r,{AmI:function(){return rt},B73:function(){return L},Dbw:function(){return E},GfN:function(){return S},HVp:function(){return Z},IrR:function(){return P},JPP:function(){return J},KFx:function(){return D},KY6:function(){return X},N6P:function(){return h},O6h:function(){return B},Oax:function(){return Y},OlQ:function(){return C},PfR:function(){return v},QAR:function(){return A},S3S:function(){return K},Spj:function(){return Q},TuN:function(){return w},VaF:function(){return nt},Wcm:function(){return O},_rK:function(){return U},_yA:function(){return ot},b4D:function(){return R},bof:function(){return W},dHS:function(){return T},eic:function(){return y},gL5:function(){return j},ht0:function(){return F},i7G:function(){return et},i8F:function(){return q},jrm:function(){return V},kxk:function(){return tt},l5H:function(){return g},lRb:function(){return x},o$d:function(){return it},p3c:function(){return H},q9E:function(){return k},qvh:function(){return N},r4w:function(){return m},tzU:function(){return M},wSz:function(){return G},xM9:function(){return I},xNc:function(){return _},yUN:function(){return b},yfA:function(){return z},z1e:function(){return p},z5F:function(){return $}});var e=Object.defineProperty,o=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,f=(t,r)=>{for(var i in r||(r={}))a.call(r,i)&&c(t,i,r[i]);if(s)for(var i of s(r))u.call(r,i)&&c(t,i,r[i]);return t},d=(t,r)=>o(t,n(r));const l=(()=>{const t=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);let r;var i;(i=r||(r={}))[i.GROUP=1]="GROUP",i[i.CAT=2]="CAT",i[i.SYMBOL=3]="SYMBOL",i[i.OR=4]="OR",i[i.STAR=5]="STAR",i[i.LITERAL=6]="LITERAL",i[i.SLASH=7]="SLASH",i[i.DOT=8]="DOT";const e="undefined"!=typeof window,o={CJS:{define(t){module.exports=t},isSupported:()=>"object"==typeof module},AMD:{define(t){define([],(function(){return t}))},isSupported:()=>"function"==typeof define&&!!define.amd},UMD:{define(t){if(o.AMD.isSupported())o.AMD.define(t);else if(o.CJS.isSupported())try{o.CJS.define(t)}catch(t){if("TypeError"!==t.name)throw t}},isSupported:()=>o.AMD.isSupported()||o.CJS.isSupported()},ESM:{define(){},isSupported:()=>!0},NIL:{define(){},isSupported:()=>!0},DTS:{define(t){o.ESM.define(t)},isSupported:()=>o.ESM.isSupported()}};class n extends Error{constructor(...t){super(`Route missing required keys: ${t.join(", ")}`),this.keys=t,Object.setPrototypeOf(this,Object.getPrototypeOf(this)),this.name=n.name}}const s=/[^a-zA-Z0-9\-._~!$&'()*+,;=:@]/g,a=["anchor","trailing_slash","subdomain","host","port","protocol"];class u{constructor(){this.configuration={prefix:"",default_url_options:{},special_options_key:"_options",serializer:this.default_serializer.bind(this)}}default_serializer(r,i){if(this.is_nullable(r))return"";if(!i&&!this.is_object(r))throw new Error("Url parameters should be a javascript hash");i=i||"";const e=[];if(this.is_array(r))for(const t of r)e.push(this.default_serializer(t,i+"[]"));else if(this.is_object(r))for(let o in r){if(!t(r,o))continue;let n=r[o];this.is_nullable(n)&&i&&(n=""),this.is_not_nullable(n)&&(i&&(o=i+"["+o+"]"),e.push(this.default_serializer(n,o)))}else this.is_not_nullable(r)&&e.push(encodeURIComponent(i)+"="+encodeURIComponent(""+r));return e.join("&")}serialize(t){return this.configuration.serializer(t)}extract_options(t,r){const i=r[r.length-1];return r.length>t&&0===i||this.is_object(i)&&!this.looks_like_serialized_model(i)?(this.is_object(i)&&delete i[this.configuration.special_options_key],{args:r.slice(0,r.length-1),options:i}):{args:r,options:{}}}looks_like_serialized_model(t){return this.is_object(t)&&!(this.configuration.special_options_key in t)&&("id"in t||"to_param"in t||"toParam"in t)}path_identifier(t){const r=this.unwrap_path_identifier(t);return this.is_nullable(r)?"":""+r}unwrap_path_identifier(t){let r=t;return this.is_object(t)?(r="to_param"in t?t.to_param:"toParam"in t?t.toParam:"id"in t?t.id:t,this.is_callable(r)?r.call(t):r):t}partition_parameters(r,i,e,o){let{args:n,options:s}=this.extract_options(r.length,o);if(n.length>r.length)throw new Error("Too many parameters provided for path");let a=n.length>i.length;const u=f({},this.configuration.default_url_options);for(const i in s){const e=s[i];t(s,i)&&(a=!0,r.includes(i)&&(u[i]=e))}s=f(f(f({},this.configuration.default_url_options),e),s);const c={};let d={};for(const r in s){if(!t(s,r))continue;const o=s[r];if("params"===r){if(!this.is_object(o))throw new Error("params value should always be an object");d=f(f({},d),o)}else this.is_reserved_option(r)?c[r]=o:this.is_nullable(o)||o===e[r]&&!i.includes(r)||(d[r]=o)}const l=a?r:i;let p=0;for(const r of l)if(p<n.length){const i=n[p];t(u,r)||(d[r]=i,++p)}return{keyword_parameters:c,query_parameters:d}}build_route(r,i,e,o,s,a){const{keyword_parameters:u,query_parameters:c}=this.partition_parameters(r,i,e,a),f=i.filter((r=>!t(c,r)||this.is_nullable(c[r])));if(f.length)throw new n(...f);let d=this.get_prefix()+this.visit(o,c);u.trailing_slash&&(d=d.replace(/(.*?)[/]?$/,"$1/"));const l=this.serialize(c);return l.length&&(d+="?"+l),d+=u.anchor?"#"+u.anchor:"",s&&(d=this.route_url(u)+d),d}visit(t,i,e=!1){switch(t[0]){case r.GROUP:return this.visit(t[1],i,!0);case r.CAT:return this.visit_cat(t,i,e);case r.SYMBOL:return this.visit_symbol(t,i,e);case r.STAR:return this.visit_globbing(t[1],i,!0);case r.LITERAL:case r.SLASH:case r.DOT:return t[1];default:throw new Error("Unknown Rails node type")}}is_not_nullable(t){return!this.is_nullable(t)}is_nullable(t){return null==t}visit_cat([t,r,i],e,o){const n=this.visit(r,e,o);let s=this.visit(i,e,o);return o&&(this.is_optional_node(r[0])&&!n||this.is_optional_node(i[0])&&!s)?"":("/"===n[n.length-1]&&"/"===s[0]&&(s=s.substring(1)),n+s)}visit_symbol([t,r],i,e){const o=this.path_identifier(i[r]);if(delete i[r],o.length)return this.encode_segment(o);if(e)return"";throw new n(r)}encode_segment(t){return t.replace(s,(t=>encodeURIComponent(t)))}is_optional_node(t){return[r.STAR,r.SYMBOL,r.CAT].includes(t)}build_path_spec(t,i=!1){let e;switch(t[0]){case r.GROUP:return"("+this.build_path_spec(t[1])+")";case r.CAT:return this.build_path_spec(t[1])+this.build_path_spec(t[2]);case r.STAR:return this.build_path_spec(t[1],!0);case r.SYMBOL:return e=t[1],i?(e.startsWith("*")?"":"*")+e:":"+e;case r.SLASH:case r.DOT:case r.LITERAL:return t[1];default:throw new Error("Unknown Rails node type")}}visit_globbing(t,r,i){const e=t[1];let o=r[e];if(delete r[e],this.is_nullable(o))return this.visit(t,r,i);this.is_array(o)&&(o=o.join("/"));const n=this.path_identifier(o);return encodeURI(n)}get_prefix(){const t=this.configuration.prefix;return t.match("/$")?t.substring(0,t.length-1):t}route(t,r,i=!1){const e=[],o=[],n={};for(const[r,{r:i,d:s}]of Object.entries(t))o.push(r),i&&e.push(r),this.is_not_nullable(s)&&(n[r]=s);const s=(...t)=>this.build_route(o,e,n,r,i,t);return s.requiredParams=()=>e,s.toString=()=>this.build_path_spec(r),s}route_url(t){const r=t.host||this.current_host();if(!r)return"";const i=t.subdomain?t.subdomain+".":"",e=t.protocol||this.current_protocol();let o=t.port||(t.host?void 0:this.current_port());return o=o?":"+o:"",e+"://"+i+r+o}current_host(){var t;return e&&(null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.hostname)||""}current_protocol(){var t,r;return e&&(null===(r=null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.protocol)||void 0===r?void 0:r.replace(/:$/,""))||"http"}current_port(){var t;return e&&(null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.port)||""}is_object(t){return"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)}is_array(t){return t instanceof Array}is_callable(t){return"function"==typeof t&&!!t.call}is_reserved_option(t){return a.includes(t)}configure(t){return this.configuration=f(f({},this.configuration),t),this.configuration}config(){return f({},this.configuration)}is_module_supported(t){return o[t].isSupported()}ensure_module_supported(t){if(!this.is_module_supported(t))throw new Error(`${t} is not supported by runtime`)}define_module(t,r){this.ensure_module_supported(t),o[t].define(r)}}const c=new u,l=f(d(f({},{r:(t,r,i)=>c.route(t,r,i)}),{configure:t=>c.configure(t),config:()=>c.config(),serialize:t=>c.serialize(t)}),{});return c.define_module("ESM",l),l})(),p=(l.configure,l.config,l.serialize,l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"business"],[2,[7,"/"],[2,[6,"billing"],[1,[2,[8,"."],[3,"format"]]]]]]]]])),_=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"cards"],[1,[2,[8,"."],[3,"format"]]]]]]]),m=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"cities"],[1,[2,[8,"."],[3,"format"]]]]]]]),h=l.r({instance_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"results"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),b=l.r({instance_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"runs"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]),w=l.r({instance_id:{r:!0},run_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"runs"],[2,[7,"/"],[2,[3,"run_id"],[2,[7,"/"],[2,[6,"code_reviews"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),g=l.r({format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"users"],[1,[2,[8,"."],[3,"format"]]]]]]]),v=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"leads"],[1,[2,[8,"."],[3,"format"]]]]]]]),S=l.r({lesson_id:{r:!0},question_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"lessons"],[2,[7,"/"],[2,[3,"lesson_id"],[2,[7,"/"],[2,[6,"questions"],[2,[7,"/"],[2,[3,"question_id"],[2,[7,"/"],[2,[6,"results"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),y=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"subscriptions"],[1,[2,[8,"."],[3,"format"]]]]]]]),O=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),j=l.r({topic_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"comments"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]),k=l.r({topic_id:{r:!0},comment_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"comments"],[2,[7,"/"],[2,[3,"comment_id"],[2,[7,"/"],[2,[6,"likes"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]),A=l.r({topic_id:{r:!0},comment_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"comments"],[2,[7,"/"],[2,[3,"comment_id"],[2,[7,"/"],[2,[6,"likes"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),R=l.r({topic_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"comments"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),T=l.r({topic_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"likes"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]),P=l.r({topic_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"likes"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),L=l.r({topic_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"subscribers"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]),z=l.r({topic_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"subscribers"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),E=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[1,[2,[8,"."],[3,"format"]]]]]]]),q=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"user"],[1,[2,[8,"."],[3,"format"]]]]]]]),M=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"assign_mentor"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),C=l.r({format:{}},[2,[7,"/"],[2,[6,"auth_vkontakte"],[2,[7,"/"],[2,[6,"vk_ids"],[1,[2,[8,"."],[3,"format"]]]]]]]),U=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"code_reviews"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]),x=l.r({format:{}},[2,[7,"/"],[2,[6,"code_reviews"],[1,[2,[8,"."],[3,"format"]]]]]),D=l.r({format:{}},[2,[7,"/"],[2,[6,"account"],[2,[7,"/"],[2,[6,"notifications"],[2,[7,"/"],[2,[6,"edit"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),I=l.r({course_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"courses"],[2,[7,"/"],[2,[3,"course_id"],[2,[7,"/"],[2,[6,"lessons"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"finish_unit"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]),$=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"heartbeat"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),H=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]),B=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"user"],[2,[7,"/"],[2,[6,"last_viewed_notification"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),G=l.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"user"],[2,[7,"/"],[2,[6,"lead_modal_shown"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),N=l.r({topic_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"comments"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"mark_as_solution"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),Y=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"mentorship"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),J=l.r({format:{}},[2,[7,"/"],[2,[6,"my"],[1,[2,[8,"."],[3,"format"]]]]]),F=l.r({instance_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"runs"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"restart"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),K=l.r({},[7,"/"]),Q=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"solution"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),V=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"assignments"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"solution"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),W=l.r({format:{}},[2,[7,"/"],[2,[6,"subscription"],[2,[7,"/"],[2,[6,"success"],[1,[2,[8,"."],[3,"format"]]]]]]]),Z=l.r({team_id:{r:!0},format:{},subdomain:{d:"ru"}},[2,[7,"/"],[2,[6,"teams"],[2,[7,"/"],[2,[3,"team_id"],[2,[7,"/"],[2,[6,"members"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),X=l.r({team_id:{r:!0},format:{},subdomain:{d:"ru"}},[2,[7,"/"],[2,[6,"teams"],[2,[7,"/"],[2,[3,"team_id"],[2,[7,"/"],[2,[6,"orders"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),tt=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"toggle_useful"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),rt=l.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]),it=l.r({topic_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"topics"],[2,[7,"/"],[2,[3,"topic_id"],[2,[7,"/"],[2,[6,"comments"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"unmark_as_solution"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),et=l.r({question_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"questions"],[2,[7,"/"],[2,[3,"question_id"],[2,[7,"/"],[2,[6,"answers"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"unvote"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),ot=l.r({user_id:{r:!0}},[2,[7,"/"],[2,[6,"u"],[2,[7,"/"],[3,"user_id"]]]]),nt=l.r({question_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"questions"],[2,[7,"/"],[2,[3,"question_id"],[2,[7,"/"],[2,[6,"answers"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"vote"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]])}}]);