(()=>{var Wl=0,mo=1,Xl=2;var Ts=1,Zl=2,Bi=3,Zn=0,yt=1,zt=2,si=0,zi=1,go=2,vo=3,xo=4,Jl=5;var ri=100,ql=101,Yl=102,Kl=103,Ql=104,jl=200,$l=201,ec=202,tc=203,yo=204,Mo=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,cc=213,hc=214,fr=0,pr=1,mr=2,Ti=3,gr=4,vr=5,xr=6,yr=7,Vr=0,uc=1,dc=2,pn=0,So=1,_o=2,bo=3,Rs=4,Eo=5,Ao=6,wo=7;var To=300,ai=301,Gi=302,Hr=303,Wr=304,Ri=1e3,ln=1001,Mr=1002,wt=1003,fc=1004;var Cs=1005;var Ft=1006,Xr=1007;var Cn=1008;var Vt=1009,Ro=1010,Co=1011,ki=1012,Zr=1013,sn=1014,Kt=1015,rn=1016,Jr=1017,qr=1018,oi=1020,Io=35902,Po=35899,Lo=1021,Do=1022,an=1023,En=1026,In=1027,Yr=1028,Kr=1029,Jn=1030,Qr=1031;var jr=1033,Is=33776,Ps=33777,Ls=33778,Ds=33779,$r=35840,ea=35841,ta=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37488,oa=37489,Ns=37490,la=37491,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,va=37816,xa=37817,ya=37818,Ma=37819,Sa=37820,_a=37821,ba=36492,Ea=36494,Aa=36495,wa=36283,Ta=36284,Us=36285,Ra=36286;var ss=2300,Sr=2301,ur=2302,ao=2303,oo=2400,lo=2401,co=2402;var pc=3200;var Os=0,mc=1,Pn="",Xt="srgb",rs="srgb-linear",as="linear",je="srgb";var dr=7680;var gc=519,vc=512,xc=513,yc=514,No=515,Mc=516,Sc=517,Uo=518,Oo=519,_c=35044;var Fo="300 es",Yt=2e3,Ci=2001;function Mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bc(){let i=os("canvas");return i.style.display="block",i}var gl={},Ii=null;function Bo(...i){let e="THREE."+i.shift();Ii?Ii("log",e,...i):console.log(e,...i)}function Ec(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Ec(i);let e="THREE."+i.shift();if(Ii)Ii("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Ec(i);let e="THREE."+i.shift();if(Ii)Ii("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ts(...i){let e=i.join(" ");e in gl||(gl[e]=!0,Pe(...i))}function Ac(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wc={[fr]:fr,[mr]:xr,[gr]:gr,[Ti]:vr,[pr]:pr,[xr]:mr,[yr]:yr,[vr]:Ti},cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=1234567,ns=Math.PI/180,Pi=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function zo(i,e){return(i%e+e)%e}function _h(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bh(i,e,t){return i!==e?(t-i)/(e-i):0}function is(i,e,t){return(1-t)*i+t*e}function Eh(i,e,t,n){return is(i,e,1-Math.exp(-t*n))}function Ah(i,e=1){return e-Math.abs(zo(i,e*2)-e)}function wh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ch(i,e){return i+Math.random()*(e-i)}function Ih(i){return i*(.5-Math.random())}function Ph(i){i!==void 0&&(vl=i);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lh(i){return i*ns}function Dh(i){return i*Pi}function Nh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Go(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oh(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),p=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ko(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tc(i,e){if(e.constructor===Float32Array)return i;let t=ko(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Rc(i,e){if(e.constructor===Float32Array)return i;let t=ko(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Hi={DEG2RAD:ns,RAD2DEG:Pi,generateUUID:Vi,clamp:Ve,euclideanModulo:zo,mapLinear:_h,inverseLerp:bh,lerp:is,damp:Eh,pingpong:Ah,smoothstep:wh,smootherstep:Th,randInt:Rh,randFloat:Ch,randFloatSpread:Ih,seededRandom:Ph,degToRad:Lh,radToDeg:Dh,isPowerOfTwo:Nh,ceilPowerOfTwo:Uh,floorPowerOfTwo:Go,setQuaternionFromProperEuler:Oh,normalize:Rc,denormalize:Tc},He=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],d=r[a+1],v=r[a+2],M=r[a+3];if(p!==M||l!==u||c!==d||h!==v){let m=l*u+c*d+h*v+p*M;m<0&&(u=-u,d=-d,v=-v,M=-M,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),R=Math.sin(S);f=Math.sin(f*S)/R,o=Math.sin(o*S)/R,l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+M*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=S,c*=S,h*=S,p*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+h*p+l*d-c*u,e[t+1]=l*v+h*u+c*p-o*d,e[t+2]=c*v+h*d+o*u-l*p,e[t+3]=h*v-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"YXZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"ZXY":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"ZYX":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"YZX":this._x=u*h*p+c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p-u*d*v;break;case"XZY":this._x=u*h*p-c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p+u*d*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fa=new N,xl=new hn,Ne=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],d=n[5],v=n[8],M=s[0],m=s[3],f=s[6],S=s[1],R=s[4],E=s[7],w=s[2],A=s[5],g=s[8];return r[0]=a*M+o*S+l*w,r[3]=a*m+o*R+l*A,r[6]=a*f+o*E+l*g,r[1]=c*M+h*S+p*w,r[4]=c*m+h*R+p*A,r[7]=c*f+h*E+p*g,r[2]=u*M+d*S+v*w,r[5]=u*m+d*R+v*A,r[8]=u*f+d*E+v*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,u=o*l-h*r,d=c*r-a*l,v=t*p+n*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=p*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new Ne,yl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fh(){let i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?as:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:e,whitePoint:n,transfer:as,toXYZ:yl,fromXYZ:Ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:yl,fromXYZ:Ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var Je=Fh();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var di,_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=os("canvas")),di.width=e.width,di.height=e.height;let s=di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bh=0,Li=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(za(s[a].image)):r.push(za(s[a]))}else r=za(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var zh=0,Ga=new N,Bt=class i extends cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ln,s=ln,r=Ft,a=Cn,o=an,l=Vt,c=i.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Vi(),this.name="",this.source=new Li(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==To)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=To;Bt.DEFAULT_ANISOTROPY=1;var ht=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,E=(d+1)/2,w=(f+1)/2,A=(h+u)/4,g=(p+M)/4,_=(v+m)/4;return R>E&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=A/n,r=g/n):E>w?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-v)*(m-v)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(p-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},br=class extends cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Li(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends br{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ls=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Er=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var it=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,p,u,d,v,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,u,d,v,M,m)}set(e,t,n,s,r,a,o,l,c,h,p,u,d,v,M,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=v,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*p,v=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+v*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*p,v=c*h,M=c*p;t[0]=u+M*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*p,v=c*h,M=c*p;t[0]=u-M*o,t[4]=-a*p,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*p,v=o*h,M=o*p;t[0]=l*h,t[4]=v*c-d,t[8]=u*c+M,t[1]=l*p,t[5]=M*c+u,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-u*p,t[8]=v*p+d,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+v,t[10]=u-M*p}else if(e.order==="XZY"){let u=a*l,d=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+M,t[5]=a*h,t[9]=d*p-v,t[2]=v*p-d,t[6]=o*h,t[10]=M*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,kh)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Nn.crossVectors(n,Ht),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Nn.crossVectors(n,Ht)),Nn.normalize(),Ws.crossVectors(Ht,Nn),s[0]=Nn.x,s[4]=Ws.x,s[8]=Ht.x,s[1]=Nn.y,s[5]=Ws.y,s[9]=Ht.y,s[2]=Nn.z,s[6]=Ws.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],d=n[13],v=n[2],M=n[6],m=n[10],f=n[14],S=n[3],R=n[7],E=n[11],w=n[15],A=s[0],g=s[4],_=s[8],F=s[12],P=s[1],D=s[5],z=s[9],J=s[13],I=s[2],V=s[6],H=s[10],k=s[14],ie=s[3],W=s[7],j=s[11],te=s[15];return r[0]=a*A+o*P+l*I+c*ie,r[4]=a*g+o*D+l*V+c*W,r[8]=a*_+o*z+l*H+c*j,r[12]=a*F+o*J+l*k+c*te,r[1]=h*A+p*P+u*I+d*ie,r[5]=h*g+p*D+u*V+d*W,r[9]=h*_+p*z+u*H+d*j,r[13]=h*F+p*J+u*k+d*te,r[2]=v*A+M*P+m*I+f*ie,r[6]=v*g+M*D+m*V+f*W,r[10]=v*_+M*z+m*H+f*j,r[14]=v*F+M*J+m*k+f*te,r[3]=S*A+R*P+E*I+w*ie,r[7]=S*g+R*D+E*V+w*W,r[11]=S*_+R*z+E*H+w*j,r[15]=S*F+R*J+E*k+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],v=e[3],M=e[7],m=e[11],f=e[15],S=l*d-c*u,R=o*d-c*p,E=o*u-l*p,w=a*d-c*h,A=a*u-l*h,g=a*p-o*h;return t*(M*S-m*R+f*E)-n*(v*S-m*w+f*A)+s*(v*R-M*w+f*g)-r*(v*E-M*A+m*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],v=e[12],M=e[13],m=e[14],f=e[15],S=t*o-n*a,R=t*l-s*a,E=t*c-r*a,w=n*l-s*o,A=n*c-r*o,g=s*c-r*l,_=h*M-p*v,F=h*m-u*v,P=h*f-d*v,D=p*m-u*M,z=p*f-d*M,J=u*f-d*m,I=S*J-R*z+E*D+w*P-A*F+g*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(o*J-l*z+c*D)*V,e[1]=(s*z-n*J-r*D)*V,e[2]=(M*g-m*A+f*w)*V,e[3]=(u*A-p*g-d*w)*V,e[4]=(l*P-a*J-c*F)*V,e[5]=(t*J-s*P+r*F)*V,e[6]=(m*E-v*g-f*R)*V,e[7]=(h*g-u*E+d*R)*V,e[8]=(a*z-o*P+c*_)*V,e[9]=(n*P-t*z-r*_)*V,e[10]=(v*A-M*E+f*S)*V,e[11]=(p*E-h*A-d*S)*V,e[12]=(o*F-a*D-l*_)*V,e[13]=(t*D-n*F+s*_)*V,e[14]=(M*R-v*w-m*S)*V,e[15]=(h*w-p*R+u*S)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,u=r*c,d=r*h,v=r*p,M=a*h,m=a*p,f=o*p,S=l*c,R=l*h,E=l*p,w=n.x,A=n.y,g=n.z;return s[0]=(1-(M+f))*w,s[1]=(d+E)*w,s[2]=(v-R)*w,s[3]=0,s[4]=(d-E)*A,s[5]=(1-(u+f))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(v+R)*g,s[9]=(m-S)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=fi.set(s[0],s[1],s[2]).length(),o=fi.set(s[4],s[5],s[6]).length(),l=fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jt.copy(this);let c=1/a,h=1/o,p=1/l;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=p,jt.elements[9]*=p,jt.elements[10]*=p,t.setFromRotationMatrix(jt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Yt,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),v,M;if(l)v=r/(a-r),M=a*r/(a-r);else if(o===Yt)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ci)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yt,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),v,M;if(l)v=1/(a-r),M=a/(a-r);else if(o===Yt)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ci)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fi=new N,jt=new it,Gh=new N(0,0,0),kh=new N(1,1,1),Nn=new N,Ws=new N,Ht=new N,Sl=new it,_l=new hn,un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vh=0,bl=new N,pi=new hn,xn=new it,Xs=new N,Yi=new N,Hh=new N,Wh=new hn,El=new N(1,0,0),Al=new N(0,1,0),wl=new N(0,0,1),Tl={type:"added"},Xh={type:"removed"},mi={type:"childadded",child:null},ka={type:"childremoved",child:null},Tt=class i extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new un,n=new hn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ne}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Yi,Xs,this.up):xn.lookAt(Xs,Yi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(xn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tl),mi.child=e,this.dispatchEvent(mi),mi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xh),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tl),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zh={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=zo(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Va(a,r,e+1/3),this.g=Va(a,r,e),this.b=Va(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Je.workingToColorSpace(Dt.copy(this),e),Math.round(Ve(Dt.r*255,0,255))*65536+Math.round(Ve(Dt.g*255,0,255))*256+Math.round(Ve(Dt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Xt){Je.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Zs);let n=is(Un.h,Zs.h,t),s=is(Un.s,Zs.s,t),r=is(Un.l,Zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ue;Ue.NAMES=Cc;var hs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ni=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$t=new N,yn=new N,Ha=new N,Mn=new N,gi=new N,vi=new N,Rl=new N,Wa=new N,Xa=new N,Za=new N,Ja=new ht,qa=new ht,Ya=new ht,zn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),yn.subVectors(n,t),Ha.subVectors(e,t);let a=$t.dot($t),o=$t.dot(yn),l=$t.dot(Ha),c=yn.dot(yn),h=yn.dot(Ha),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,v=(a*h-o*l)*u;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ja.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Ja.fromBufferAttribute(e,t),qa.fromBufferAttribute(e,n),Ya.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ja,r.x),a.addScaledVector(qa,r.y),a.addScaledVector(Ya,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),yn.subVectors(e,t),$t.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),$t.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),vi.subVectors(r,n),Wa.subVectors(e,n);let l=gi.dot(Wa),c=vi.dot(Wa);if(l<=0&&c<=0)return t.copy(n);Xa.subVectors(e,s);let h=gi.dot(Xa),p=vi.dot(Xa);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(gi,a);Za.subVectors(e,r);let d=gi.dot(Za),v=vi.dot(Za);if(v>=0&&d<=v)return t.copy(r);let M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(vi,o);let m=h*v-d*p;if(m<=0&&p-h>=0&&d-v>=0)return Rl.subVectors(r,s),o=(p-h)/(p-h+(d-v)),t.copy(s).addScaledVector(Rl,o);let f=1/(m+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(gi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),qs.subVectors(this.max,Ki),xi.subVectors(e.a,Ki),yi.subVectors(e.b,Ki),Mi.subVectors(e.c,Ki),On.subVectors(yi,xi),Fn.subVectors(Mi,yi),Qn.subVectors(xi,Mi);let t=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,On.z,0,-On.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Ka(t,xi,yi,Mi,qs)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,xi,yi,Mi,qs))?!1:(Ys.crossVectors(On,Fn),t=[Ys.x,Ys.y,Ys.z],Ka(t,xi,yi,Mi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sn=[new N,new N,new N,new N,new N,new N,new N,new N],en=new N,Js=new dn,xi=new N,yi=new N,Mi=new N,On=new N,Fn=new N,Qn=new N,Ki=new N,qs=new N,Ys=new N,jn=new N;function Ka(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vt=new N,Ks=new He,Jh=0,kt=class extends cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=Kt,this.version=0,this._normalizationScale=e!==void 0?ko(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rc(e,this.array)}};var us=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ds=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qh=new dn,Qi=new N,Qa=new N,Gn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Qa)),this.expandByPoint(Qi.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yh=0,qt=new it,ja=new Tt,Si=new N,Wt=new dn,ji=new dn,At=new N,tn=class i extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?ds:us)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Wt.min,ji.min),Wt.expandByPoint(At),At.addVectors(Wt.max,ji.max),Wt.expandByPoint(At)):(Wt.expandByPoint(ji.min),Wt.expandByPoint(ji.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),At.add(Si)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;let h=new N,p=new N,u=new N,d=new He,v=new He,M=new He,m=new N,f=new N;function S(F,P,D){c[F]=c[P]=c[D]=1,h.fromBufferAttribute(n,F),p.fromBufferAttribute(n,P),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,F),v.fromBufferAttribute(r,P),M.fromBufferAttribute(r,D),p.sub(h),u.sub(h),v.sub(d),M.sub(d);let z=1/(v.x*M.y-M.x*v.y);isFinite(z)&&(m.copy(p).multiplyScalar(M.y).addScaledVector(u,-v.y).multiplyScalar(z),f.copy(u).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(z),o[F].add(m),o[P].add(m),o[D].add(m),l[F].add(f),l[P].add(f),l[D].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,P=R.length;F<P;++F){let D=R[F],z=D.start,J=D.count;for(let I=z,V=z+J;I<V;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let E=new N,w=new N,A=new N,g=new N;function _(F){A.fromBufferAttribute(s,F),g.copy(A);let P=o[F];E.copy(P),E.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(g,P);let z=w.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,z)}for(let F=0,P=n.count;F<P;++F)c[F]&&_(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,p=new N;if(e)for(let u=0,d=e.count;u<d;u+=3){let v=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let f=0;f<h;f++)u[v++]=c[d++]}return new kt(u,h,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $a=new N,Kh=new N,Qh=new Ne,Gt=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$a.subVectors(n,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qh.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jh=0,An=class extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=zi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var _n=new N,eo=new N,Qs=new N,js=new N,Ar=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eo.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),js.copy(this.origin).sub(eo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=js.dot(this.direction),l=-js.dot(Qs),c=js.lengthSq(),h=Math.abs(1-a*a),p,u,d,v;if(h>0)if(p=a*l-o,u=a*o-l,v=r*h,p>=0)if(u>=-v)if(u<=v){let M=1/h;p*=M,u*=M,d=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(eo).addScaledVector(Qs,u),d}intersectSphere(e,t){if(e.radius<0)return null;_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,u=e.y-a.y,d=e.z-a.z,v=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,S=n.y-a.y,R=n.z-a.z,E=Math.abs(l),w=Math.abs(c),A=Math.abs(h),g,_,F,P,D,z,J,I,V,H,k,ie;if(E>=w&&E>=A?(F=l,z=p,V=v,ie=f,l>=0?(g=c,_=h,P=u,D=d,J=M,I=m,H=S,k=R):(g=h,_=c,P=d,D=u,J=m,I=M,H=R,k=S)):w>=A?(F=c,z=u,V=M,ie=S,c>=0?(g=h,_=l,P=d,D=p,J=m,I=v,H=R,k=f):(g=l,_=h,P=p,D=d,J=v,I=m,H=f,k=R)):(F=h,z=d,V=m,ie=R,h>=0?(g=l,_=c,P=p,D=u,J=v,I=M,H=f,k=S):(g=c,_=l,P=u,D=p,J=M,I=v,H=S,k=f)),F===0)return null;let W=g/F,j=_/F,te=1/F,ye=P-W*z,Ce=D-j*z,Z=J-W*V,pe=I-j*V,$=H-W*ie,ne=k-j*ie,ee=$*pe-ne*Z,_e=ye*ne-Ce*$,qe=Z*Ce-pe*ye;if(s){if(ee<0||_e<0||qe<0)return null}else if((ee<0||_e<0||qe<0)&&(ee>0||_e>0||qe>0))return null;let Me=ee+_e+qe;if(Me===0)return null;let Fe=te*(ee*z+_e*V+qe*ie);return(Me>0?Fe<0:Fe>0)?null:this.at(Fe/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cl=new it,$n=new Ar,$s=new Gn,Il=new N,er=new N,tr=new N,nr=new N,to=new N,ir=new N,Pl=new N,sr=new N,$e=class extends Tt{constructor(e=new tn,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(to.fromBufferAttribute(p,e),a?ir.addScaledVector(to,h):ir.addScaledVector(to.sub(t),h))}t.add(ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!($s.containsPoint($n.origin)===!1&&($n.intersectSphere($s,Il)===null||$n.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),$n.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=u.length;v<M;v++){let m=u[v],f=a[m.materialIndex],S=Math.max(m.start,d.start),R=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,w=R;E<w;E+=3){let A=o.getX(E),g=o.getX(E+1),_=o.getX(E+2);s=rr(this,f,e,n,c,h,p,A,g,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=v,f=M;m<f;m+=3){let S=o.getX(m),R=o.getX(m+1),E=o.getX(m+2);s=rr(this,a,e,n,c,h,p,S,R,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=u.length;v<M;v++){let m=u[v],f=a[m.materialIndex],S=Math.max(m.start,d.start),R=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,w=R;E<w;E+=3){let A=E,g=E+1,_=E+2;s=rr(this,f,e,n,c,h,p,A,g,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=v,f=M;m<f;m+=3){let S=m,R=m+1,E=m+2;s=rr(this,a,e,n,c,h,p,S,R,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $h(i,e,t,n,s,r,a,o){let l;if(e.side===yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,tr),i.getVertexPosition(c,nr);let h=$h(i,e,t,n,er,tr,nr,Pl);if(h){let p=new N;zn.getBarycoord(Pl,er,tr,nr,p),s&&(h.uv=zn.getInterpolatedAttribute(s,o,l,c,p,new He)),r&&(h.uv1=zn.getInterpolatedAttribute(r,o,l,c,p,new He)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,l,c,p,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};zn.getNormal(er,tr,nr,u.normal),h.face=u,h.barycoord=p}return h}var fs=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=wt,h=wt,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_i=new it,Ll=new it,ar=[],Dl=new dn,eu=new it,$i=new $e,es=new Gn,ms=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Dl.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(Dl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),es.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),e.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),Ll.multiplyMatrices(n,_i),$i.matrixWorld=Ll,$i.raycast(e,ar);for(let a=0,o=ar.length;a<o;a++){let l=ar[a];l.instanceId=r,l.object=this,t.push(l)}ar.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fs(new Float32Array(s*this.count),s,this.count,Yr,Kt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ei=new Gn,tu=new He(.5,.5),or=new N,kn=class{constructor(e=new Gt,t=new Gt,n=new Gt,s=new Gt,r=new Gt,a=new Gt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],v=r[8],M=r[9],m=r[10],f=r[11],S=r[12],R=r[13],E=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,f-v,w-S).normalize(),s[1].setComponents(c+a,d+h,f+v,w+S).normalize(),s[2].setComponents(c+o,d+p,f+M,w+R).normalize(),s[3].setComponents(c-o,d-p,f-M,w-R).normalize(),n)s[4].setComponents(l,u,m,E).normalize(),s[5].setComponents(c-l,d-u,f-m,w-E).normalize();else if(s[4].setComponents(c-l,d-u,f-m,w-E).normalize(),t===Yt)s[5].setComponents(c+l,d+u,f+m,w+E).normalize();else if(t===Ci)s[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);let t=tu.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nl=new it,wr=class i{constructor(){this.coordinateSystem=Yt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Nl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new kn),n[s].setFromProjectionMatrix(Nl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new kn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var gs=class extends Bt{constructor(e=[],t=ai,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ni=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tn=class extends Bt{constructor(e,t,n=sn,s,r,a,o=wt,l=wt,c,h=En,p=1){if(h!==En&&h!==In)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Li(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vs=class extends Tn{constructor(e,t=sn,n=ai,s,r,a=wt,o=wt,l,c=En){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xs=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vn=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function v(M,m,f,S,R,E,w,A,g,_,F){let P=E/g,D=w/_,z=E/2,J=w/2,I=A/2,V=g+1,H=_+1,k=0,ie=0,W=new N;for(let j=0;j<H;j++){let te=j*D-J;for(let ye=0;ye<V;ye++){let Ce=ye*P-z;W[M]=Ce*S,W[m]=te*R,W[f]=I,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[f]=A>0?1:-1,h.push(W.x,W.y,W.z),p.push(ye/g),p.push(1-j/_),k+=1}}for(let j=0;j<_;j++)for(let te=0;te<g;te++){let ye=u+te+V*j,Ce=u+te+V*(j+1),Z=u+(te+1)+V*(j+1),pe=u+(te+1)+V*j;l.push(ye,Ce,pe),l.push(Ce,Z,pe),ie+=6}o.addGroup(d,ie,F),d+=ie,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Tr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new He:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new it;for(let d=0;d<=e;d++){let v=d/e;s[d]=this.getTangentAt(v,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ve(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function Vo(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ul=new N,Ol=new N,no=new Vo,io=new Vo,so=new Vo,Ui=class extends Tr{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ol.subVectors(s[0],s[1]).add(s[0]),c=Ol);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ul.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ul),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(p),d),M=Math.pow(p.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),v<1e-4&&(v=M),m<1e-4&&(m=M),no.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,v,M,m),io.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,v,M,m),so.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,v,M,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),io.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),so.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(no.calc(l),io.calc(l),so.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Rn=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,d=[],v=[],M=[],m=[];for(let f=0;f<h;f++){let S=f*u-a;for(let R=0;R<c;R++){let E=R*p-r;v.push(E,-S,0),M.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let R=S+c*f,E=S+c*(f+1),w=S+1+c*(f+1),A=S+1+c*f;d.push(R,E,A),d.push(E,w,A)}this.setIndex(d),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ys=class i extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new N,u=new N,d=[],v=[],M=[],m=[];for(let f=0;f<=n;f++){let S=[],R=f/n,E=a+R*o,w=e*Math.cos(E),A=Math.sqrt(e*e-w*w),g=0;f===0&&a===0?g=.5/t:f===n&&l===Math.PI&&(g=-.5/t);for(let _=0;_<=t;_++){let F=_/t,P=s+F*r;p.x=-A*Math.cos(P),p.y=w,p.z=A*Math.sin(P),v.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),m.push(F+g,1-R),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let R=h[f][S+1],E=h[f][S],w=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&d.push(R,E,A),(f!==n-1||l<Math.PI)&&d.push(E,w,A)}this.setIndex(d),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fl(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=li(i[t]);for(let s in n)e[s]=n[s]}return e}function Fl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ho(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Ic={clone:li,merge:Ut},iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rr=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Os,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ii=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Os,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cr=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ir=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pr=class extends Hn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oo,endingEnd:oo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lo:r=e,o=2*t-n;break;case co:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lo:a=e,l=2*n-t;break;case co:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(n-t)/(s-t),M=v*v,m=M*v,f=-u*m+2*u*M-u*v,S=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*v+1,R=(-1-d)*m+(1.5+d)*M+.5*v,E=d*m-d*M;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+S*a[c+w]+R*a[l+w]+E*a[p+w];return r}},Lr=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Dr=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nr=class extends Hn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let v=(n-t)/(s-t),M=1-v;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*v;return r}let u=o*2,d=e-1;for(let v=0;v!==o;++v){let M=a[c+v],m=a[l+v],f=d*u+v*2,S=p[f],R=p[f+1],E=e*u+v*2,w=h[E],A=h[E+1],g=au(n,t,S,w,s);r[v]=Pc(g,M,R,A,m)}return r}};function Pc(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ru(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function au(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Pc(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ru(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bi(t,this.TimeBufferType),this.values=bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bi(e.times,Array),values:bi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),lr(e.settings)&&(n.settings={inTangents:bi(e.settings.inTangents,Array),outTangents:bi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case ur:t=this.InterpolantFactoryMethodSmooth;break;case ao:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return ur;case this.InterpolantFactoryMethodBezier:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;lr(this.settings)&&(Bl(this.settings.inTangents,e),Bl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;lr(this.settings)&&(zl(this.settings.inTangents,e),zl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Sh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ur,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,d=p+n;for(let v=0;v!==n;++v){let M=t[p+v];if(M!==t[u+v]||M!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[p+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,lr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function zl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Sr;var Wn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=ss;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Ur.prototype.ValueTypeName="color";var Or=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Or.prototype.ValueTypeName="number";var Fr=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ms=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fr(this.times,this.values,this.getValueSize(),e)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=ss;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Br.prototype.ValueTypeName="vector";var zr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lc=new zr,Gr=class{constructor(e){this.manager=e!==void 0?e:Lc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi=class extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ss=class extends Oi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ro=new it,Gl=new N,kl=new N,_s=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kn,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ro,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ci||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cr=new N,hr=new hn,on=new N,bs=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cr,hr,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,on.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cr,hr,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bn=new N,Vl=new He,Hl=new He,Nt=class extends bs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Hl),t.subVectors(Hl,Vl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ho=class extends _s{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends Oi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ho}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},As=class extends bs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uo=class extends _s{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Oi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new uo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ei=-90,Ai=1,Fi=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Ei,Ai,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Ei,Ai,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Ei,Ai,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Ei,Ai,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Ei,Ai,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Ei,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Yt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ci)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},kr=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wo="\\[\\]\\.:\\/",ou=new RegExp("["+Wo+"]","g"),Xo="[^"+Wo+"]",lu="[^"+Wo.replace("\\.","")+"]",cu=/((?:WC+[\/:])*)/.source.replace("WC",Xo),hu=/(WCOD+)?/.source.replace("WCOD",lu),uu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),du=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),fu=new RegExp("^"+cu+hu+uu+du+"$"),pu=["material","materials","bones","map"],fo=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ou,"")}static parseTrackName(e){let t=fu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=fo;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rg=new Float32Array(1);var po=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Zo(i,e,t,n){let s=mu(n);switch(t){case Lo:return i*e;case Yr:return i*e/s.components*s.byteLength;case Kr:return i*e/s.components*s.byteLength;case Jn:return i*e*2/s.components*s.byteLength;case Qr:return i*e*2/s.components*s.byteLength;case Do:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case jr:return i*e*4/s.components*s.byteLength;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:case na:return Math.max(i,16)*Math.max(e,8)/4;case $r:case ta:return Math.max(i,8)*Math.max(e,8)/2;case ia:case sa:case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:case Ns:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ba:case Ea:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wa:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Us:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mu(i){switch(i){case Vt:case Ro:return{byteLength:1,components:1};case ki:case Co:case rn:return{byteLength:2,components:1};case Jr:case qr:return{byteLength:2,components:4};case sn:case Zr:case Kt:return{byteLength:4,components:1};case Io:case Po:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function eh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vu(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let M=p[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:xu,alphahash_pars_fragment:yu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:_u,alphatest_pars_fragment:bu,aomap_fragment:Eu,aomap_pars_fragment:Au,batching_pars_vertex:wu,batching_vertex:Tu,begin_vertex:Ru,beginnormal_vertex:Cu,bsdfs:Iu,iridescence_fragment:Pu,bumpmap_pars_fragment:Lu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Ou,color_fragment:Fu,color_pars_fragment:Bu,color_pars_vertex:zu,color_vertex:Gu,common:ku,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Hu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:Zu,colorspace_fragment:Ju,colorspace_pars_fragment:qu,envmap_fragment:Yu,envmap_common_pars_fragment:Ku,envmap_pars_fragment:Qu,envmap_pars_vertex:ju,envmap_physical_pars_fragment:cd,envmap_vertex:$u,fog_vertex:ed,fog_pars_vertex:td,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:vd,lights_fragment_end:xd,lightprobes_pars_fragment:yd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:bd,map_fragment:Ed,map_pars_fragment:Ad,map_particle_fragment:wd,map_particle_pars_fragment:Td,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Id,morphcolor_vertex:Pd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Dd,morphtarget_vertex:Nd,normal_fragment_begin:Ud,normal_fragment_maps:Od,normal_pars_fragment:Fd,normal_pars_vertex:Bd,normal_vertex:zd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Wd,opaque_fragment:Xd,packing:Zd,premultiplied_alpha_fragment:Jd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:Kd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:sf,skinning_pars_vertex:rf,skinning_vertex:af,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:hf,tonemapping_pars_fragment:uf,transmission_fragment:df,transmission_pars_fragment:ff,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,worldpos_vertex:vf,background_vert:xf,background_frag:yf,backgroundCube_vert:Mf,backgroundCube_frag:Sf,cube_vert:_f,cube_frag:bf,depth_vert:Ef,depth_frag:Af,distance_vert:wf,distance_frag:Tf,equirect_vert:Rf,equirect_frag:Cf,linedashed_vert:If,linedashed_frag:Pf,meshbasic_vert:Lf,meshbasic_frag:Df,meshlambert_vert:Nf,meshlambert_frag:Uf,meshmatcap_vert:Of,meshmatcap_frag:Ff,meshnormal_vert:Bf,meshnormal_frag:zf,meshphong_vert:Gf,meshphong_frag:kf,meshphysical_vert:Vf,meshphysical_frag:Hf,meshtoon_vert:Wf,meshtoon_frag:Xf,points_vert:Zf,points_frag:Jf,shadow_vert:qf,shadow_frag:Yf,sprite_vert:Kf,sprite_frag:Qf},ve={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},gn={basic:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ut([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ut([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ut([ve.points,ve.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ut([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ut([ve.common,ve.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ut([ve.sprite,ve.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ut([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ut([ve.lights,ve.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};gn.physical={uniforms:Ut([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Ca={r:0,b:0,g:0},jf=new it,th=new Ne;th.set(-1,0,0,0,1,0,0,0,1);function $f(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let E=S.backgroundBlurriness>0;R=e.get(R,E)}return R}function v(S){let R=!1,E=d(S);E===null?m(a,o):E&&E.isColor&&(m(E,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,R){let E=d(R);E&&E.isCubeTexture?(c===void 0&&(c=new $e(new Vn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:li(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(th),c.material.toneMapped=Je.getTransfer(E.colorSpace)!==je,(h!==E||p!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new $e(new Rn(2,2),new fn({name:"BackgroundMaterial",uniforms:li(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==je,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,p=E.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,R){S.getRGB(Ca,Ho(i)),t.buffers.color.setClear(Ca.r,Ca.g,Ca.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:v,addToRenderList:M,dispose:f}}function ep(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,z,J,I,V){let H=!1,k=p(D,I,J,z);r!==k&&(r=k,c(r.object)),H=d(D,I,J,V),H&&v(D,I,J,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(D,z,J,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function p(D,z,J,I){let V=I.wireframe===!0,H=n[z.id];H===void 0&&(H={},n[z.id]=H);let k=D.isInstancedMesh===!0?D.id:0,ie=H[k];ie===void 0&&(ie={},H[k]=ie);let W=ie[J.id];W===void 0&&(W={},ie[J.id]=W);let j=W[V];return j===void 0&&(j=u(l()),W[V]=j),j}function u(D){let z=[],J=[],I=[];for(let V=0;V<t;V++)z[V]=0,J[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,z,J,I){let V=r.attributes,H=z.attributes,k=0,ie=J.getAttributes();for(let W in ie)if(ie[W].location>=0){let te=V[W],ye=H[W];if(ye===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),te===void 0||te.attribute!==ye||ye&&te.data!==ye.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function v(D,z,J,I){let V={},H=z.attributes,k=0,ie=J.getAttributes();for(let W in ie)if(ie[W].location>=0){let te=H[W];te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let ye={};ye.attribute=te,te&&te.data&&(ye.data=te.data),V[W]=ye,k++}r.attributes=V,r.attributesNum=k,r.index=I}function M(){let D=r.newAttributes;for(let z=0,J=D.length;z<J;z++)D[z]=0}function m(D){f(D,0)}function f(D,z){let J=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;J[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),V[D]!==z&&(i.vertexAttribDivisor(D,z),V[D]=z)}function S(){let D=r.newAttributes,z=r.enabledAttributes;for(let J=0,I=z.length;J<I;J++)z[J]!==D[J]&&(i.disableVertexAttribArray(J),z[J]=0)}function R(D,z,J,I,V,H,k){k===!0?i.vertexAttribIPointer(D,z,J,V,H):i.vertexAttribPointer(D,z,J,I,V,H)}function E(D,z,J,I){M();let V=I.attributes,H=J.getAttributes(),k=z.defaultAttributeValues;for(let ie in H){let W=H[ie];if(W.location>=0){let j=V[ie];if(j===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let te=j.normalized,ye=j.itemSize,Ce=e.get(j);if(Ce===void 0)continue;let Z=Ce.buffer,pe=Ce.type,$=Ce.bytesPerElement,ne=pe===i.INT||pe===i.UNSIGNED_INT||j.gpuType===Zr;if(j.isInterleavedBufferAttribute){let ee=j.data,_e=ee.isInterleavedBuffer===!0?ee.stride:ee.itemSize,qe=j.offset;if(ee.isInstancedInterleavedBuffer||ee.isInstancedBufferAttribute){for(let Me=0;Me<W.locationSize;Me++)f(W.location+Me,ee.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<W.locationSize;Me++)m(W.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Me=0;Me<W.locationSize;Me++)R(W.location+Me,ye/W.locationSize,pe,te,_e*$,(qe+ye/W.locationSize*Me)*$,ne)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)f(W.location+ee,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ee=0;ee<W.locationSize;ee++)R(W.location+ee,ye/W.locationSize,pe,te,ye*$,ye/W.locationSize*ee*$,ne)}}else if(k!==void 0){let te=k[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}S()}function w(){F();for(let D in n){let z=n[D];for(let J in z){let I=z[J];for(let V in I){let H=I[V];for(let k in H)h(H[k].object),delete H[k];delete I[V]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let J in z){let I=z[J];for(let V in I){let H=I[V];for(let k in H)h(H[k].object),delete H[k];delete I[V]}}delete n[D.id]}function g(D){for(let z in n){let J=n[z];for(let I in J){let V=J[I];if(V[D.id]===void 0)continue;let H=V[D.id];for(let k in H)h(H[k].object),delete H[k];delete V[D.id]}}}function _(D){for(let z in n){let J=n[z],I=D.isInstancedMesh===!0?D.id:0,V=J[I];if(V!==void 0){for(let H in V){let k=V[H];for(let ie in k)h(k[ie].object),delete k[ie];delete V[H]}delete J[I],Object.keys(J).length===0&&delete n[z]}}}function F(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function tp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function np(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==an&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let _=g===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Vt&&g!==Kt&&!_&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:E,maxSamples:w,samples:A}}function ip(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gt,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||s;return s=u,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,R=S*4,E=f.clippingState||null;l.value=E,E=h(v,u,R,d);for(let w=0;w!==R;++w)E[w]=t[w];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,d,v){let M=p!==null?p.length:0,m=null;if(M!==0){if(m=l.value,v!==!0||m===null){let f=d+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,E=d;R!==M;++R,E+=4)a.copy(p[R]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var zs=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:si});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ft),new Fi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Dc=256,sp=3,rp=20,nh=256,ih=16,ap=3,op=new N,lp=new Ue,Xi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fi(1,10,null),this._boxMesh=new $e(new Vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=op}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(lp));let m=new Fi(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=v,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Dc,Go(e))}_fromTexture(e,t){e.mapping===ai||e.mapping===Gi?this._setSize(e.image.length===0?Dc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Nc(e,!1,!1),n=Math.log2(e)-sp;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Nc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ai||e.mapping===Gi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Uc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cp(),this._integrationMaterial=hp());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ih);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-ap)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(nh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=up());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Nc(i,e,t){return new zs(i,{minFilter:Cn,generateMipmaps:e,type:rn,colorSpace:rs,depthBuffer:t})}function Gs(i,e,t){return new fn({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:yt,blending:si,depthTest:!1,depthWrite:!1})}function cp(){return Gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hp(){return Gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ih}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function up(){return Gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Uc(){return Gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Oc(){return Gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Hr||d===Wr)if(e.has(u)){let v=e.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new zs(v.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,v=d===Hr||d===Wr,M=d===ai||d===Gi;if(v||M){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Xi(i)),m=v?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return v&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Xi(i)),m=v?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Hr?u.mapping=ai:d===Wr&&(u.mapping=Gi),u}function l(u){let d=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function fp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function pp(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(let m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);let M=r.get(v);M&&(e.remove(M),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(v){let M=v.attributes;for(let m in M)e.update(M[m],i.ARRAY_BUFFER)}function p(v){let M=v.index,m=v.attributes.position,f=0;if(m===void 0)return;let S=M!==null?M.array.length:m.array.length/3-1,R=m.count>=65535?ds:us,E=new R(Math.ceil(S/3)*6,1),w=E.array;if(M!==null){let g=M.array;f=M.version;for(let _=0,F=0;_<S;_+=3){let P=g[_+0],D=g[_+1],z=g[_+2];w[F++]=P,w[F++]=D,w[F++]=D,w[F++]=z,w[F++]=z,w[F++]=P}}else{f=m.version;for(let g=0,_=0;g<S;g+=3){let F=g+0,P=g+1,D=g+2;w[_++]=F,w[_++]=P,w[_++]=P,w[_++]=D,w[_++]=D,w[_++]=F}}E.version=f;let A=r.get(v);A&&e.remove(A),r.set(v,E)}function u(v){let M=r.get(v);if(M){let m=v.index;m!==null&&M.version<m.version&&p(v)}else p(v);return r.get(v)}function d(){for(let v in s){let M=s[v].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function mp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function c(p,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,p*a,d),t.update(u,n,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,d);let M=0;for(let m=0;m<d;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let F=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;d===!0&&(R=1),v===!0&&(R=2),M===!0&&(R=3);let E=o.attributes.position.count*R,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let A=new Float32Array(E*w*4*p),g=new ls(A,E,w,p);g.type=Kt,g.needsUpdate=!0;let _=R*4;for(let P=0;P<p;P++){let D=m[P],z=f[P],J=S[P],I=E*w*4*P;for(let V=0;V<D.count;V++){let H=V*_;d===!0&&(s.fromBufferAttribute(D,V),A[I+H+0]=s.x,A[I+H+1]=s.y,A[I+H+2]=s.z,A[I+H+3]=0),v===!0&&(s.fromBufferAttribute(z,V),A[I+H+4]=s.x,A[I+H+5]=s.y,A[I+H+6]=s.z,A[I+H+7]=0),M===!0&&(s.fromBufferAttribute(J,V),A[I+H+8]=s.x,A[I+H+9]=s.y,A[I+H+10]=s.z,A[I+H+11]=J.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new He(E,w)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xp(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var yp={[So]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[bo]:"CINEON_TONE_MAPPING",[Rs]:"ACES_FILMIC_TONE_MAPPING",[Ao]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[Eo]:"CUSTOM_TONE_MAPPING"};function Mp(i,e,t,n,s,r){let a=new Zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new tn;h.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let p=new Rr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $e(h,p),d=new As(-1,1,1,-1,0,1),v=null,M=null,m=!1,f,S=null,R=[],E=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let g=0;g<R.length;g++){let _=R[g];_.setSize&&_.setSize(w,A)}},this.setEffects=function(w){R=w,E=R.length>0&&R[0].isRenderPass===!0;let A=a.width,g=a.height;R.length>0&&o===null&&(o=new Zt(A,g,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new Zt(A,g,{type:rn,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&R.some(F=>F.needsDepthTexture===!0);_!==(a.depthTexture!==null)&&(_===!0&&c===null&&(c=new Tn(A,g),r===!0&&(c.format=In,c.type=oi)),a.dispose(),a.depthTexture=_?c:null,a.resolveDepthBuffer=_,a.storeMultisampledDepthBuffer=_);for(let F=0;F<R.length;F++){let P=R[F];P.setSize&&P.setSize(A,g),_&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,A){if(m||w.toneMapping===pn&&R.length===0)return!1;if(S=A,A!==null){let g=A.width,_=A.height;(a.width!==g||a.height!==_)&&this.setSize(g,_)}return E===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=pn,!0},this.hasRenderPass=function(){return E},this.end=function(w,A){w.toneMapping=f,m=!0;let g=a,_=o;for(let F=0;F<R.length;F++){let P=R[F];P.enabled!==!1&&(P.render(w,_,g,A),P.needsSwap!==!1&&(g=_,_=_===o?l:o))}if(v!==w.outputColorSpace||M!==w.toneMapping){v=w.outputColorSpace,M=w.toneMapping,p.defines={},Je.getTransfer(v)===je&&(p.defines.SRGB_TRANSFER="");let F=yp[M];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(S),w.render(u,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var sh=new Bt,rh=new Tn(1,1),ah=new vs(1),oh=new ls,lh=new Er,ch=new gs,Fc=[],Bc=[],zc=new Float32Array(16),Gc=new Float32Array(9),kc=new Float32Array(4);function Zi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function La(i,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _p(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Ap(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),St(t,n)}}function wp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),St(t,n)}}function Tp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),St(t,n)}}function Rp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Da(i){return i.version===0&&(i.compareFunction=Oo,i.needsUpdate=!0),i}function Op(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Da(rh):r=sh,t.setTexture2D(e||r,s)}function Fp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lh,s)}function Bp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Da(ah):r=ch,t.setTextureCube(e||r,s)}function zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||oh,s)}function Gp(i){switch(i){case 5126:return Sp;case 35664:return _p;case 35665:return bp;case 35666:return Ep;case 35674:return Ap;case 35675:return wp;case 35676:return Tp;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Ip;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function kp(i,e){i.uniform1fv(this.addr,e)}function Vp(i,e){let t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Hp(i,e){let t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Wp(i,e){let t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Xp(i,e){let t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zp(i,e){let t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jp(i,e){let t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function Kp(i,e){i.uniform3iv(this.addr,e)}function Qp(i,e){i.uniform4iv(this.addr,e)}function jp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function em(i,e){i.uniform3uiv(this.addr,e)}function tm(i,e){i.uniform4uiv(this.addr,e)}function nm(i,e,t){let n=this.cache,s=e.length,r=La(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Da(rh):a=sh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function im(i,e,t){let n=this.cache,s=e.length,r=La(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lh,r[a])}function sm(i,e,t){let n=this.cache,s=e.length,r=La(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Da(ah):a=ch;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function rm(i,e,t){let n=this.cache,s=e.length,r=La(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||oh,r[a])}function am(i){switch(i){case 5126:return kp;case 35664:return Vp;case 35665:return Hp;case 35666:return Wp;case 35674:return Xp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Kp;case 35669:case 35673:return Qp;case 5125:return jp;case 36294:return $p;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}var Yo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}},Ko=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=am(t.type)}},Qo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function Vc(i,e){i.seq.push(e),i.map[e.id]=e}function om(i,e,t){let n=i.name,s=n.length;for(Jo.lastIndex=0;;){let r=Jo.exec(n),a=Jo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vc(t,c===void 0?new Yo(o,i,e):new Ko(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Qo(o),Vc(t,p)),t=p}}}var Wi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);om(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Hc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lm=37297,cm=0;function hm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wc=new Ne;function um(i){Je._getMatrix(Wc,Je.workingColorSpace,i);let e=`mat3( ${Wc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case as:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hm(i.getShaderSource(e),o)}else return r}function dm(i,e){let t=um(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var fm={[So]:"Linear",[_o]:"Reinhard",[bo]:"Cineon",[Rs]:"ACESFilmic",[Ao]:"AgX",[wo]:"Neutral",[Eo]:"Custom"};function pm(i,e){let t=fm[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ia=new N;function mm(){Je.getLuminanceCoefficients(Ia);let i=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function vm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bs(i){return i!==""}function Zc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(ym,Mm)}function Mm(i,e){let t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jo(t)}var Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(Sm,_m)}function _m(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bm={[Ts]:"SHADOWMAP_TYPE_PCF",[Bi]:"SHADOWMAP_TYPE_VSM"};function Em(i){return bm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Am={[Gi]:"ENVMAP_MODE_REFRACTION"};function wm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Am[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tm={[Vr]:"ENVMAP_BLENDING_MULTIPLY",[uc]:"ENVMAP_BLENDING_MIX",[dc]:"ENVMAP_BLENDING_ADD"};function Rm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tm[i.combine]||"ENVMAP_BLENDING_NONE"}function Cm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Em(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=wm(t),p=Rm(t),u=gm(t),d=vm(r),v=s.createProgram(),M,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Bs).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Bs).join(`
`),m.length>0&&(m+=`
`)):(M=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),m=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?ke.tonemapping_pars_fragment:"",t.toneMapping!==pn?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,dm("linearToOutputTexel",t.outputColorSpace),mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),a=jo(a),a=Zc(a,t),a=Jc(a,t),o=jo(o),o=Zc(o,t),o=Jc(o,t),a=qc(a),o=qc(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=f+M+a,R=f+m+o,E=Hc(s,s.VERTEX_SHADER,S),w=Hc(s,s.FRAGMENT_SHADER,R);s.attachShader(v,E),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(w)||"",I=D.trim(),V=z.trim(),H=J.trim(),k=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,w);else{let W=Xc(s,E,"vertex"),j=Xc(s,w,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+W+`
`+j)}else I!==""?Pe("WebGLProgram: Program Info Log:",I):(V===""||H==="")&&(ie=!1);ie&&(P.diagnostics={runnable:k,programLog:I,vertexShader:{log:V,prefix:M},fragmentShader:{log:H,prefix:m}})}s.deleteShader(E),s.deleteShader(w),g=new Wi(s,v),_=xm(s,v)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(v,lm)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}var Im=0,$o=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new el(e),t.set(e,n)),n}},el=class{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}};function Pm(i){return i===Jn||i===Ns||i===Us}function Lm(i,e,t,n,s,r){let a=new cs,o=new $o,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,_,F,P,D,z){let J=P.fog,I=D.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||V,H),ie=u[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Pe("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=j!==void 0?j.length:0,ye=0;I.morphAttributes.position!==void 0&&(ye=1),I.morphAttributes.normal!==void 0&&(ye=2),I.morphAttributes.color!==void 0&&(ye=3);let Ce,Z,pe,$;if(ie){let ge=gn[ie];Ce=ge.vertexShader,Z=ge.fragmentShader}else{Ce=g.vertexShader,Z=g.fragmentShader;let ge=o.getVertexShaderStage(g),tt=o.getFragmentShaderStage(g);o.update(g,ge,tt),pe=ge.id,$=tt.id}let ne=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),_e=D.isInstancedMesh===!0,qe=D.isBatchedMesh===!0,Me=!!g.map,Fe=!!g.matcap,De=!!k,Te=De&&k.isPMREMTexture===!0,We=!!g.aoMap,Ke=!!g.lightMap,ft=!!g.bumpMap&&g.wireframe===!1,et=!!g.normalMap,dt=!!g.displacementMap,pt=!!g.emissiveMap,nt=!!g.metalnessMap,rt=!!g.roughnessMap,mt=g.anisotropy>0,L=g.clearcoat>0,_t=g.diffuseRoughness>0,at=g.dispersion>0,ot=g.retroreflectivity>0,me=g.iridescence>0,xt=g.sheen>0,Ie=g.transmission>0,Oe=mt&&!!g.anisotropyMap,b=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,O=L&&!!g.clearcoatRoughnessMap,se=_t&&!!g.diffuseRoughnessMap,Q=me&&!!g.iridescenceMap,oe=me&&!!g.iridescenceThicknessMap,de=xt&&!!g.sheenColorMap,q=xt&&!!g.sheenRoughnessMap,Y=!!g.specularMap,ce=!!g.specularColorMap,T=!!g.specularIntensityMap,K=Ie&&!!g.transmissionMap,X=Ie&&!!g.thicknessMap,he=!!g.gradientMap,ae=!!g.alphaMap,le=g.alphaTest>0,we=!!g.alphaHash,Ge=!!g.extensions,re=pn;g.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(re=i.toneMapping);let Re=Te?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ze={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:Ce,fragmentShader:Z,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:qe,batchingColor:qe&&D._colorsTexture!==null,instancing:_e,instancingColor:_e&&D.instanceColor!==null,instancingMorph:_e&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Me,matcap:Fe,envMap:De,envMapMode:De&&k.mapping,envMapPMREM:Te,envMapMaxLod:Te?Re.length-1:null,envMapSize:Te?Re[0].width:null,aoMap:We,lightMap:Ke,bumpMap:ft,normalMap:et,displacementMap:dt,emissiveMap:pt,normalMapObjectSpace:et&&g.normalMapType===mc,normalMapTangentSpace:et&&g.normalMapType===Os,packedNormalMap:et&&g.normalMapType===Os&&Pm(g.normalMap.format),metalnessMap:nt,roughnessMap:rt,anisotropy:mt,anisotropyMap:Oe,clearcoat:L,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:_t,diffuseRoughnessMap:se,dispersion:at,retroreflection:ot,iridescence:me,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:xt,sheenColorMap:de,sheenRoughnessMap:q,specularMap:Y,specularColorMap:ce,specularIntensityMap:T,transmission:Ie,transmissionMap:K,thicknessMap:X,gradientMap:he,opaque:g.transparent===!1&&g.blending===zi&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:we,combine:g.combine,mapUv:Me&&d(g.map.channel),aoMapUv:We&&d(g.aoMap.channel),lightMapUv:Ke&&d(g.lightMap.channel),bumpMapUv:ft&&d(g.bumpMap.channel),normalMapUv:et&&d(g.normalMap.channel),displacementMapUv:dt&&d(g.displacementMap.channel),emissiveMapUv:pt&&d(g.emissiveMap.channel),metalnessMapUv:nt&&d(g.metalnessMap.channel),roughnessMapUv:rt&&d(g.roughnessMap.channel),anisotropyMapUv:Oe&&d(g.anisotropyMap.channel),clearcoatMapUv:b&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(g.sheenRoughnessMap.channel),specularMapUv:Y&&d(g.specularMap.channel),specularColorMapUv:ce&&d(g.specularColorMap.channel),specularIntensityMapUv:T&&d(g.specularIntensityMap.channel),transmissionMapUv:K&&d(g.transmissionMap.channel),thicknessMapUv:X&&d(g.thicknessMap.channel),alphaMapUv:ae&&d(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(et||mt),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Me||ae),fog:!!J,useFog:g.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&et===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ee,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ye,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:z.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Me&&g.map.isVideoTexture===!0&&Je.getTransfer(g.map.colorSpace)===je,decodeVideoTextureEmissive:pt&&g.emissiveMap.isVideoTexture===!0&&Je.getTransfer(g.emissiveMap.colorSpace)===je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===zt,flipSided:g.side===yt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&g.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function M(g){let _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(let F in g.defines)_.push(F),_.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(m(_,g),f(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function m(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapPMREM),g.push(_.envMapMaxLod),g.push(_.envMapSize),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.diffuseRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.numLightProbeGrids),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function f(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.diffuseRoughness&&a.enable(25),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let _=u[g.type],F;if(_){let P=gn[_];F=Ic.clone(P.uniforms)}else F=g.uniforms;return F}function R(g,_){let F=h.get(_);return F!==void 0?++F.usedTimes:(F=new Cm(i,_,g,s),c.push(F),h.set(_,F)),F}function E(g){if(--g.usedTimes===0){let _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:A}}function Dm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,m,f){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:v,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=v,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=f),e++,S}function l(u,d,v,M,m,f,S){S.reversedDepth===!0&&(m=-m);let R=o(u,d,v,M,m,f);v.transmission>0?n.push(R):v.transparent===!0?s.push(R):t.push(R)}function c(u,d,v,M,m,f){let S=o(u,d,v,M,m,f);v.transmission>0?n.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,d){t.length>1&&t.sort(u||Nm),n.length>1&&n.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function p(){for(let u=e,d=i.length;u<d;u++){let v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Um(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Qc,i.set(n,[a])):s>=r.length?(a=new Qc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Om(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ue};break;case"SpotLight":t={position:new N,direction:new N,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Fm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bm=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gm(i){let e=new Om,t=Fm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new it,a=new it;function o(c){let h=0,p=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,v=0,M=0,m=0,f=0,S=0,R=0,E=0,w=0,A=0,g=0,_=0,F=0,P=0;c.sort(zm);for(let z=0,J=c.length;z<J;z++){let I=c[z],V=I.color,H=I.intensity,k=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Jn?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*H,p+=V.g*H,u+=V.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],H);P++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[v]=te,n.sunShadowMap[v]=ie;let ye=j.getViewportCount();for(let Ce=0;Ce<ye;Ce++)n.sunShadowMatrix[M+Ce]=j.getMatrix(Ce),n.sunShadowCascade[M+Ce]=j._cascadeData[Ce];M+=ye,v++}n.sun[d]=W,d++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(H),W.distance=k,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;let j=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,j.updateMatrices(I),I.castShadow&&F++),n.spotLightMatrix[S]=j.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ie,g++}S++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(V).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=W,R++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[f]=te,n.pointShadowMap[f]=ie,n.pointShadowMatrix[f]=I.shadow.matrix,A++}n.point[f]=W,f++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[E]=W,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==S||D.rectAreaLength!==R||D.hemiLength!==E||D.numSunShadows!==v||D.numDirectionalShadows!==w||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==_||D.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=R,n.point.length=f,n.hemi.length=E,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+_-F,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=P,D.sunLength=d,D.directionalLength=m,D.pointLength=f,D.spotLength=S,D.rectAreaLength=R,D.hemiLength=E,D.numSunShadows=v,D.numDirectionalShadows=w,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=_,D.numLightProbes=P,n.version=Bm++)}function l(c,h){let p=0,u=0,d=0,v=0,M=0,m=0,f=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let E=c[S];if(E.isSunLight){let w=n.sun[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(f),p++}else if(E.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(E.isSpotLight){let w=n.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),v++}else if(E.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(E.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(E.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),d++}else if(E.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function jc(i){let e=new Gm(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function km(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jc(i),e.set(s,[o])):r>=a.length?(o=new jc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wm=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Xm=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],$c=new it,Fs=new N,qo=new N;function Zm(i,e,t){let n=new kn,s=new He,r=new He,a=new ht,o=new Cr,l=new Ir,c={},h=t.maxTextureSize,p={[Zn]:yt,[yt]:Zn,[zt]:zt},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Vm,fragmentShader:Hm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new tn;v.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let f=this.type;this.render=function(A,g,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Zl&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let F=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let J=f!==this.type;J&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=A.length;I<V;I++){let H=A[I],k=H.shadow;if(k===void 0){Pe("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ie=k.getFrameExtents();s.multiply(ie),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,k.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||J===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Bi){if(H.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Zt(s.x,s.y,{format:Jn,type:rn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Tn(s.x,s.y,Kt),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=En,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt}else H.isPointLight?(k.map=new zs(s.x),k.map.depthTexture=new vs(s.x,sn)):(k.map=new Zt(s.x,s.y),k.map.depthTexture=new Tn(s.x,s.y,sn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=En,this.type===Ts?(k.map.depthTexture.compareFunction=W?Uo:No,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,_);let te=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:_.layers;for(let ye=0;ye<j;ye++){let Ce=k.getCamera(ye);if(H.isPointLight){let Z=k.camera,pe=k.matrix,$=H.distance||Z.far;$!==Z.far&&(Z.far=$,Z.updateProjectionMatrix()),Fs.setFromMatrixPosition(H.matrixWorld),Z.position.copy(Fs),qo.copy(Z.position),qo.add(Wm[ye]),Z.up.copy(Xm[ye]),Z.lookAt(qo),Z.updateMatrixWorld(),pe.makeTranslation(-Fs.x,-Fs.y,-Fs.z),$c.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix($c,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(k.map),i.clear());let Z=k.getViewport(ye);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),z.viewport(a)}n=k.getFrustum(ye),E(g,_,Ce,H,te,this.type)}k.isPointLightShadow!==!0&&this.type===Bi&&S(k,_),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(F,P,D)};function S(A,g){let _=e.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Zt(s.x,s.y,{format:Jn,type:rn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,_,u,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,_,d,M,null)}function R(A,g,_,F){let P=null,D=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=P.uuid,J=g.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let V=I[J];V===void 0&&(V=P.clone(),I[J]=V,g.addEventListener("dispose",w)),P=V}if(P.visible=g.visible,P.wireframe=g.wireframe,F===Bi?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:p[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=_}return P}function E(A,g,_,F,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Bi)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let I=e.update(A),V=A.material;if(Array.isArray(V)){let H=I.groups;for(let k=0,ie=H.length;k<ie;k++){let W=H[k],j=V[W.materialIndex];if(j&&j.visible){let te=R(A,j,F,D);A.onBeforeShadow(i,A,g,_,I,te,W),i.renderBufferDirect(_,null,I,te,A,W),A.onAfterShadow(i,A,g,_,I,te,W)}}}else if(V.visible){let H=R(A,V,F,D);A.onBeforeShadow(i,A,g,_,I,H,null),i.renderBufferDirect(_,null,I,H,A,null),A.onAfterShadow(i,A,g,_,I,H,null)}}let J=A.children;for(let I=0,V=J.length;I<V;I++)E(J[I],g,_,F,P,D)}function w(A){A.target.removeEventListener("dispose",w);for(let _ in c){let F=c[_],P=A.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function Jm(i,e){function t(){let T=!1,K=new ht,X=null,he=new ht(0,0,0,0);return{setMask:function(ae){X!==ae&&!T&&(i.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){T=ae},setClear:function(ae,le,we,Ge,re){re===!0&&(ae*=Ge,le*=Ge,we*=Ge),K.set(ae,le,we,Ge),he.equals(K)===!1&&(i.clearColor(ae,le,we,Ge),he.copy(K))},reset:function(){T=!1,X=null,he.set(-1,0,0,0)}}}function n(){let T=!1,K=!1,X=null,he=null,ae=null;return{setReversed:function(le){if(K!==le){let we=e.get("EXT_clip_control");le?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),K=le;let Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return K},setTest:function(le){le?ee(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(le){X!==le&&!T&&(i.depthMask(le),X=le)},setFunc:function(le){if(K&&(le=wc[le]),he!==le){switch(le){case fr:i.depthFunc(i.NEVER);break;case pr:i.depthFunc(i.ALWAYS);break;case mr:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case gr:i.depthFunc(i.EQUAL);break;case vr:i.depthFunc(i.GEQUAL);break;case xr:i.depthFunc(i.GREATER);break;case yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=le}},setLocked:function(le){T=le},setClear:function(le){ae!==le&&(ae=le,K&&(le=1-le),i.clearDepth(le))},reset:function(){T=!1,X=null,he=null,ae=null,K=!1}}}function s(){let T=!1,K=null,X=null,he=null,ae=null,le=null,we=null,Ge=null,re=null;return{setTest:function(Re){T||(Re?ee(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Re){K!==Re&&!T&&(i.stencilMask(Re),K=Re)},setFunc:function(Re,ze,ge){(X!==Re||he!==ze||ae!==ge)&&(i.stencilFunc(Re,ze,ge),X=Re,he=ze,ae=ge)},setOp:function(Re,ze,ge){(le!==Re||we!==ze||Ge!==ge)&&(i.stencilOp(Re,ze,ge),le=Re,we=ze,Ge=ge)},setLocked:function(Re){T=Re},setClear:function(Re){re!==Re&&(i.clearStencil(Re),re=Re)},reset:function(){T=!1,K=null,X=null,he=null,ae=null,le=null,we=null,Ge=null,re=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},p={},u={},d=new WeakMap,v=[],M=null,m=!1,f=null,S=null,R=null,E=null,w=null,A=null,g=null,_=new Ue(0,0,0),F=0,P=!1,D=null,z=null,J=null,I=null,V=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=ie>=2);let j=null,te={},ye=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Z=new ht().fromArray(ye),pe=new ht().fromArray(Ce);function $(T,K,X,he){let ae=new Uint8Array(4),le=i.createTexture();i.bindTexture(T,le),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<X;we++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(K+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return le}let ne={};ne[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ti),ft(!1),et(mo),ee(i.CULL_FACE),We(si);function ee(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function _e(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function qe(T,K){return u[T]!==K?(i.bindFramebuffer(T,K),u[T]=K,T===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),T===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Me(T,K){let X=v,he=!1;if(T){X=d.get(K),X===void 0&&(X=[],d.set(K,X));let ae=T.textures;if(X.length!==ae.length||X[0]!==i.COLOR_ATTACHMENT0){for(let le=0,we=ae.length;le<we;le++)X[le]=i.COLOR_ATTACHMENT0+le;X.length=ae.length,he=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,he=!0);he&&i.drawBuffers(X)}function Fe(T){return M!==T?(i.useProgram(T),M=T,!0):!1}let De={[ri]:i.FUNC_ADD,[ql]:i.FUNC_SUBTRACT,[Yl]:i.FUNC_REVERSE_SUBTRACT};De[Kl]=i.MIN,De[Ql]=i.MAX;let Te={[jl]:i.ZERO,[$l]:i.ONE,[ec]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[ac]:i.SRC_ALPHA_SATURATE,[sc]:i.DST_COLOR,[nc]:i.DST_ALPHA,[tc]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[rc]:i.ONE_MINUS_DST_COLOR,[ic]:i.ONE_MINUS_DST_ALPHA,[oc]:i.CONSTANT_COLOR,[lc]:i.ONE_MINUS_CONSTANT_COLOR,[cc]:i.CONSTANT_ALPHA,[hc]:i.ONE_MINUS_CONSTANT_ALPHA};function We(T,K,X,he,ae,le,we,Ge,re,Re){if(T===si){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),T!==Jl){if(T!==f||Re!==P){if((S!==ri||w!==ri)&&(i.blendEquation(i.FUNC_ADD),S=ri,w=ri),Re)switch(T){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",T);break}else switch(T){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vo:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xo:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",T);break}R=null,E=null,A=null,g=null,_.set(0,0,0),F=0,f=T,P=Re}return}ae=ae||K,le=le||X,we=we||he,(K!==S||ae!==w)&&(i.blendEquationSeparate(De[K],De[ae]),S=K,w=ae),(X!==R||he!==E||le!==A||we!==g)&&(i.blendFuncSeparate(Te[X],Te[he],Te[le],Te[we]),R=X,E=he,A=le,g=we),(Ge.equals(_)===!1||re!==F)&&(i.blendColor(Ge.r,Ge.g,Ge.b,re),_.copy(Ge),F=re),f=T,P=!1}function Ke(T,K){T.side===zt?_e(i.CULL_FACE):ee(i.CULL_FACE);let X=T.side===yt;K&&(X=!X),ft(X),T.blending===zi&&T.transparent===!1?We(si):We(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let he=T.stencilWrite;o.setTest(he),he&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),pt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(T){D!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),D=T)}function et(T){T!==Wl?(ee(i.CULL_FACE),T!==z&&(T===mo?i.cullFace(i.BACK):T===Xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),z=T}function dt(T){T!==J&&(k&&i.lineWidth(T),J=T)}function pt(T,K,X){T?(ee(i.POLYGON_OFFSET_FILL),(I!==K||V!==X)&&(I=K,V=X,a.getReversed()&&(K=-K,X=-X),i.polygonOffset(K,X))):_e(i.POLYGON_OFFSET_FILL)}function nt(T){T?ee(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function rt(T){T===void 0&&(T=i.TEXTURE0+H-1),j!==T&&(i.activeTexture(T),j=T)}function mt(T,K,X){X===void 0&&(j===null?X=i.TEXTURE0+H-1:X=j);let he=te[X];he===void 0&&(he={type:void 0,texture:void 0},te[X]=he),(he.type!==T||he.texture!==K)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(T,K||ne[T]),he.type=T,he.texture=K)}function L(){let T=te[j];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(T){Le("WebGLState:",T)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(T){Le("WebGLState:",T)}}function ot(){try{i.texSubImage2D(...arguments)}catch(T){Le("WebGLState:",T)}}function me(){try{i.texSubImage3D(...arguments)}catch(T){Le("WebGLState:",T)}}function xt(){try{i.compressedTexSubImage2D(...arguments)}catch(T){Le("WebGLState:",T)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(T){Le("WebGLState:",T)}}function Oe(){try{i.texStorage2D(...arguments)}catch(T){Le("WebGLState:",T)}}function b(){try{i.texStorage3D(...arguments)}catch(T){Le("WebGLState:",T)}}function x(){try{i.texImage2D(...arguments)}catch(T){Le("WebGLState:",T)}}function O(){try{i.texImage3D(...arguments)}catch(T){Le("WebGLState:",T)}}function se(T){return p[T]!==void 0?p[T]:i.getParameter(T)}function Q(T,K){p[T]!==K&&(i.pixelStorei(T,K),p[T]=K)}function oe(T){Z.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Z.copy(T))}function de(T){pe.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),pe.copy(T))}function q(T,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let he=X.get(T);he===void 0&&(he=i.getUniformBlockIndex(K,T.name),i.uniformBlockBinding(K,he,he),X.set(T,he))}function Y(T,K,X){let ae=c.get(K).get(T);l[ae]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ae,X),l[ae]=X)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,te={},u={},l={},d=new WeakMap,v=[],M=null,m=!1,f=null,S=null,R=null,E=null,w=null,A=null,g=null,_=new Ue(0,0,0),F=0,P=!1,D=null,z=null,J=null,I=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:qe,drawBuffers:Me,useProgram:Fe,setBlending:We,setMaterial:Ke,setFlipSided:ft,setCullFace:et,setLineWidth:dt,setPolygonOffset:pt,setScissorTest:nt,activeTexture:rt,bindTexture:mt,unbindTexture:L,compressedTexImage2D:_t,compressedTexImage3D:at,texImage2D:x,texImage3D:O,pixelStorei:Q,getParameter:se,updateUBOMapping:q,uniformBlockBinding:Y,texStorage2D:Oe,texStorage3D:b,texSubImage2D:ot,texSubImage3D:me,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ie,scissor:oe,viewport:de,reset:ce}}function qm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,p=new Set,u,d=new WeakMap,v=new Set,M=new FinalizationRegistry(b=>v.delete(b)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,x){return m?new OffscreenCanvas(b,x):os("canvas")}function S(b,x,O){let se=1,Q=Oe(b);if((Q.width>O||Q.height>O)&&(se=O/Math.max(Q.width,Q.height)),se<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let oe=Math.floor(se*Q.width),de=Math.floor(se*Q.height);u===void 0&&(u=f(oe,de));let q=x?f(oe,de):u;return q.width=oe,q.height=de,q.getContext("2d").drawImage(b,0,0,oe,de),Pe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+de+")."),q}else return"data"in b&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function R(b){return b.generateMipmaps}function E(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(b,x,O,se,Q,oe=!1){if(b!==null){if(i[b]!==void 0)return i[b];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8),O===i.UNSIGNED_SHORT&&de&&(q=de.R16_EXT),O===i.SHORT&&de&&(q=de.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),x===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8),O===i.UNSIGNED_SHORT&&de&&(q=de.RG16_EXT),O===i.SHORT&&de&&(q=de.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(q=de.RGB16_EXT),O===i.SHORT&&de&&(q=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let Y=oe?as:Je.getTransfer(Q);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Y===je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(q=de.RGBA16_EXT),O===i.SHORT&&de&&(q=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(b,x){let O;return b?x===null||x===sn||x===oi?O=i.DEPTH24_STENCIL8:x===Kt?O=i.DEPTH32F_STENCIL8:x===ki&&(O=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===sn||x===oi?O=i.DEPTH_COMPONENT24:x===Kt?O=i.DEPTH_COMPONENT32F:x===ki&&(O=i.DEPTH_COMPONENT16),O}function _(b,x){return R(b)===!0||b.isFramebufferTexture&&b.minFilter!==wt&&b.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function F(b){let x=new WeakRef(b);n.get(b).__ref=x,v.add(x),M.register(b,x,x)}function P(b){let x=n.get(b).__ref;x!==void 0&&(v.delete(x),M.unregister(x))}function D(b){J(b.target)}function z(b){I(b.target)}function J(b){b.removeEventListener("dispose",D),P(b),H(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&p.delete(b)}function I(b){b.removeEventListener("dispose",z),P(b),ie(b)}function V(){for(let b of v){let x=b.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):J(x))}v.clear(),p.clear()}function H(b){let x=n.get(b);if(x.__webglInit===void 0)return;let O=b.source,se=d.get(O);if(se){let Q=se[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&k(b),Object.keys(se).length===0&&d.delete(O)}n.remove(b)}function k(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let O=b.source,se=d.get(O);delete se[x.__cacheKey],a.memory.textures--}function ie(b){let x=n.get(b);x.__depthDisposeCallback&&x.__depthDisposeCallback();let O=b.depthTexture;if(O&&O.renderTarget===b&&J(O),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let oe=0;oe<x.__webglFramebuffer[Q].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[Q][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let se=b.textures;for(let Q=0,oe=se.length;Q<oe;Q++){let de=n.get(se[Q]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(se[Q])}n.remove(b)}let W=0;function j(){W=0}function te(){return W}function ye(b){W=b}function Ce(){let b=W;return b>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,b}function Z(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function pe(b,x){let O=n.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let se=b.image;if(se===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function $(b,x){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Ke(O,b,x);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function ne(b,x){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Ke(O,b,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function ee(b,x){let O=n.get(b);if(b.version>0&&O.__version!==b.version){ft(O,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let _e={[Ri]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Mr]:i.MIRRORED_REPEAT},qe={[wt]:i.NEAREST,[fc]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},Me={[vc]:i.NEVER,[Oo]:i.ALWAYS,[xc]:i.LESS,[No]:i.LEQUAL,[yc]:i.EQUAL,[Uo]:i.GEQUAL,[Mc]:i.GREATER,[Sc]:i.NOTEQUAL};function Fe(b,x){if(x.type===Kt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ft||x.magFilter===Xr||x.magFilter===Cs||x.magFilter===Cn||x.minFilter===Ft||x.minFilter===Xr||x.minFilter===Cs||x.minFilter===Cn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,_e[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,_e[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,_e[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,qe[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,qe[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==Cs&&x.minFilter!==Cn||x.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function De(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",D),F(x));let se=x.source,Q=d.get(se);Q===void 0&&(Q={},d.set(se,Q));let oe=Z(x);if(oe!==b.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[oe].usedTimes++;let de=Q[b.__cacheKey];de!==void 0&&(Q[b.__cacheKey].usedTimes--,de.usedTimes===0&&k(x)),b.__cacheKey=oe,b.__webglTexture=Q[oe].texture}return O}function Te(b,x,O){return Math.floor(Math.floor(b/O)/x)}function We(b,x,O,se){let oe=b.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,se,x.data);else{oe.sort((T,K)=>T.start-K.start);let de=0;for(let T=1;T<oe.length;T++){let K=oe[de],X=oe[T],he=K.start+K.count,ae=Te(X.start,x.width,4),le=Te(K.start,x.width,4);X.start<=he+1&&ae===le&&Te(X.start+X.count-1,x.width,4)===ae?K.count=Math.max(K.count,X.start+X.count-K.start):(++de,oe[de]=X)}oe.length=de+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let T=0,K=oe.length;T<K;T++){let X=oe[T],he=Math.floor(X.start/4),ae=Math.ceil(X.count/4),le=he%x.width,we=Math.floor(he/x.width),Ge=ae,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,we),t.texSubImage2D(i.TEXTURE_2D,0,le,we,Ge,re,O,se,x.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Ke(b,x,O){let se=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=i.TEXTURE_3D);let Q=De(b,x),oe=x.source;t.bindTexture(se,b.__webglTexture,i.TEXTURE0+O);let de=n.get(oe);if(oe.version!==de.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let re=Je.getPrimaries(Je.workingColorSpace),Re=x.colorSpace===Pn?null:Je.getPrimaries(x.colorSpace),ze=x.colorSpace===Pn||re===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Y=S(x.image,!1,s.maxTextureSize);Y=Ie(x,Y);let ce=r.convert(x.format,x.colorSpace),T=r.convert(x.type),K=A(x.internalFormat,ce,T,x.normalized,x.colorSpace,x.isVideoTexture);Fe(se,x);let X,he=x.mipmaps,ae=x.isVideoTexture!==!0,le=de.__version===void 0||Q===!0,we=oe.dataReady,Ge=_(x,Y);if(x.isDepthTexture)K=g(x.format===In,x.type),le&&(ae?t.texStorage2D(i.TEXTURE_2D,1,K,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,K,Y.width,Y.height,0,ce,T,null));else if(x.isDataTexture)if(he.length>0){ae&&le&&t.texStorage2D(i.TEXTURE_2D,Ge,K,he[0].width,he[0].height);for(let re=0,Re=he.length;re<Re;re++)X=he[re],ae?we&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,ce,T,X.data):t.texImage2D(i.TEXTURE_2D,re,K,X.width,X.height,0,ce,T,X.data);x.generateMipmaps=!1}else ae?(le&&t.texStorage2D(i.TEXTURE_2D,Ge,K,Y.width,Y.height),we&&We(x,Y,ce,T)):t.texImage2D(i.TEXTURE_2D,0,K,Y.width,Y.height,0,ce,T,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ae&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,K,he[0].width,he[0].height,Y.depth);for(let re=0,Re=he.length;re<Re;re++)if(X=he[re],x.format!==an)if(ce!==null)if(ae){if(we)if(x.layerUpdates.size>0){let ze=Zo(X.width,X.height,x.format,x.type);for(let ge of x.layerUpdates){let tt=X.data.subarray(ge*ze/X.data.BYTES_PER_ELEMENT,(ge+1)*ze/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ge,X.width,X.height,1,ce,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,Y.depth,ce,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,K,X.width,X.height,Y.depth,0,X.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,Y.depth,ce,T,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,K,X.width,X.height,Y.depth,0,ce,T,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(i.TEXTURE_2D,Ge,K,he[0].width,he[0].height);for(let re=0,Re=he.length;re<Re;re++)X=he[re],x.format!==an?ce!==null?ae?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,ce,X.data):t.compressedTexImage2D(i.TEXTURE_2D,re,K,X.width,X.height,0,X.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?we&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,ce,T,X.data):t.texImage2D(i.TEXTURE_2D,re,K,X.width,X.height,0,ce,T,X.data)}else if(x.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,K,Y.width,Y.height,Y.depth),we)if(x.layerUpdates.size>0){let re=Zo(Y.width,Y.height,x.format,x.type);for(let Re of x.layerUpdates){let ze=Y.data.subarray(Re*re/Y.data.BYTES_PER_ELEMENT,(Re+1)*re/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,Y.width,Y.height,1,ce,T,ze)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ce,T,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,Y.width,Y.height,Y.depth,0,ce,T,Y.data);else if(x.isData3DTexture)ae?(le&&t.texStorage3D(i.TEXTURE_3D,Ge,K,Y.width,Y.height,Y.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ce,T,Y.data)):t.texImage3D(i.TEXTURE_3D,0,K,Y.width,Y.height,Y.depth,0,ce,T,Y.data);else if(x.isFramebufferTexture){if(le)if(ae)t.texStorage2D(i.TEXTURE_2D,Ge,K,Y.width,Y.height);else{let re=Y.width,Re=Y.height;for(let ze=0;ze<Ge;ze++)t.texImage2D(i.TEXTURE_2D,ze,K,re,Re,0,ce,T,null),re>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Y.parentNode!==re){re.appendChild(Y),p.add(x),re.onpaint=Re=>{let ze=Re.changedElements;for(let ge of p)ze.includes(ge.image)&&(ge.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let ze=i.RGBA,ge=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,ge,tt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(ae&&le){let re=Oe(he[0]);t.texStorage2D(i.TEXTURE_2D,Ge,K,re.width,re.height)}for(let re=0,Re=he.length;re<Re;re++)X=he[re],ae?we&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ce,T,X):t.texImage2D(i.TEXTURE_2D,re,K,ce,T,X);x.generateMipmaps=!1}else if(ae){if(le){let re=Oe(Y);t.texStorage2D(i.TEXTURE_2D,Ge,K,re.width,re.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,T,Y)}else t.texImage2D(i.TEXTURE_2D,0,K,ce,T,Y);R(x)&&x.mipmapsAutoUpdate===!0&&E(se),de.__version=oe.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ft(b,x,O){if(x.image.length!==6)return;let se=De(b,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);let oe=n.get(Q);if(Q.version!==oe.__version||se===!0){t.activeTexture(i.TEXTURE0+O);let de=Je.getPrimaries(Je.workingColorSpace),q=x.colorSpace===Pn?null:Je.getPrimaries(x.colorSpace),Y=x.colorSpace===Pn||de===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,T=x.image[0]&&x.image[0].isDataTexture,K=[];for(let ge=0;ge<6;ge++)!ce&&!T?K[ge]=S(x.image[ge],!0,s.maxCubemapSize):K[ge]=T?x.image[ge].image:x.image[ge],K[ge]=Ie(x,K[ge]);let X=K[0],he=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),le=A(x.internalFormat,he,ae,x.normalized,x.colorSpace),we=x.isVideoTexture!==!0,Ge=oe.__version===void 0||se===!0,re=Q.dataReady,Re=_(x,X);Fe(i.TEXTURE_CUBE_MAP,x);let ze;if(x.isDepthTexture){if(le=g(x.format===In,x.type),Ge)if(we)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,X.width,X.height);else for(let ge=0;ge<6;ge++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,X.width,X.height,0,he,ae,null)}else if(ce){we&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,le,X.width,X.height);for(let ge=0;ge<6;ge++){ze=K[ge].mipmaps;for(let tt=0;tt<ze.length;tt++){let bt=ze[tt];x.format!==an?he!==null?we?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt,0,0,bt.width,bt.height,he,bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt,le,bt.width,bt.height,0,bt.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt,0,0,bt.width,bt.height,he,ae,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt,le,bt.width,bt.height,0,he,ae,bt.data)}}}else{if(ze=x.mipmaps,we&&Ge){ze.length>0&&Re++;let ge=Oe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(T){we?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,K[ge].width,K[ge].height,he,ae,K[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,K[ge].width,K[ge].height,0,he,ae,K[ge].data);for(let tt=0;tt<ze.length;tt++){let Ln=ze[tt].image[ge].image;we?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt+1,0,0,Ln.width,Ln.height,he,ae,Ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt+1,le,Ln.width,Ln.height,0,he,ae,Ln.data)}}else{we?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,he,ae,K[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,he,ae,K[ge]);for(let tt=0;tt<ze.length;tt++){let bt=ze[tt];we?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt+1,0,0,he,ae,bt.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,tt+1,le,he,ae,bt.image[ge])}}}R(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),oe.__version=Q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,O,se,Q,oe){let de=r.convert(O.format,O.colorSpace),q=r.convert(O.type),Y=A(O.internalFormat,de,q,O.normalized,O.colorSpace),ce=n.get(x),T=n.get(O);if(T.__renderTarget=x,!ce.__hasExternalTextures){let K=Math.max(1,x.width>>oe),X=Math.max(1,x.height>>oe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,oe,Y,K,X,x.depth,0,de,q,null):t.texImage2D(Q,oe,Y,K,X,0,de,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,Q,T.__webglTexture,0,ot(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,Q,T.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let se=x.depthTexture,Q=se&&se.isDepthTexture?se.type:null,oe=g(x.stencilBuffer,Q),de=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(x),oe,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(x),oe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,oe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,b)}else{let se=x.textures;for(let Q=0;Q<se.length;Q++){let oe=se[Q],de=r.convert(oe.format,oe.colorSpace),q=r.convert(oe.type),Y=A(oe.internalFormat,de,q,oe.normalized,oe.colorSpace);me(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(x),Y,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(b,x,O){let se=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);Q.__renderTarget=x;let oe=se?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||oe.width!==x.width||oe.height!==x.height)&&(oe.width=x.width,oe.height=x.height,x.depthTexture.needsUpdate=!0),se?ee(x.depthTexture,0):pe(x.depthTexture,0);let de=Q.__webglTexture,q=ot(x),Y=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ce=x.depthTexture.format===In?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===En)me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Y,de,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Y,de,0);else if(x.depthTexture.format===In)me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Y,de,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Y,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(b){let x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let se=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",Q)};se.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=se}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let se=0;se<6;se++)pt(x.__webglFramebuffer[se],b,se);else b.texture.mipmaps.length>0?pt(x.__webglFramebuffer[0],b,0):pt(x.__webglFramebuffer,b,0);else if(O){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=i.createRenderbuffer(),dt(x.__webglDepthbuffer[se],b,!1);else{let Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,oe)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),dt(x.__webglDepthbuffer,b,!1);else{let Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,x,O){let se=n.get(b);x!==void 0&&et(se.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&nt(b)}function mt(b){let x=b.texture,O=n.get(b),se=n.get(x);b.addEventListener("dispose",z),F(b);let Q=b.textures,oe=b.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=x.version,a.memory.textures++),oe){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[q][Y]=i.createFramebuffer()}else O.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)O.__webglFramebuffer[q]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let q=0,Y=Q.length;q<Y;q++){let ce=n.get(Q[q]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&me(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let Y=Q[q];O.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[q]);let ce=r.convert(Y.format,Y.colorSpace),T=r.convert(Y.type),K=A(Y.internalFormat,ce,T,Y.normalized,Y.colorSpace,b.isXRRenderTarget===!0),X=ot(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,O.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)et(O.__webglFramebuffer[q][Y],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Y);else et(O.__webglFramebuffer[q],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);R(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let q=0,Y=Q.length;q<Y;q++){let ce=Q[q],T=n.get(ce),K=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,T.__webglTexture),Fe(K,ce),et(O.__webglFramebuffer,b,ce,i.COLOR_ATTACHMENT0+q,K,0),R(ce)&&E(K)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,se.__webglTexture),Fe(q,x),x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)et(O.__webglFramebuffer[Y],b,x,i.COLOR_ATTACHMENT0,q,Y);else et(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,q,0);R(x)?E(q):x.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&nt(b)}function L(b){let x=b.textures;for(let O=0,se=x.length;O<se;O++){let Q=x[O];if(R(Q)&&Q.mipmapsAutoUpdate===!0){let oe=w(b),de=n.get(Q).__webglTexture;t.bindTexture(oe,de),E(oe),t.unbindTexture()}}}let _t=[];function at(b){if(b.samples>0){if(me(b)===!1){let x=b.textures,O=b.width,se=b.height,Q=i.COLOR_BUFFER_BIT,oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(b),q=x.length>1;if(q)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let T=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,T,0)}i.blitFramebuffer(0,0,O,se,0,0,O,se,Q,i.NEAREST),l===!0&&(_t.length=0,_t.push(i.COLOR_ATTACHMENT0+ce),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&_t.push(oe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let T=n.get(x[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,T,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ot(b){return Math.min(s.maxSamples,b.samples)}function me(b){let x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ie(b,x){let O=b.colorSpace,se=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==rs&&O!==Pn&&(Je.getTransfer(O)===je?(se!==an||Q!==Vt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",O)),x}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=ye,this.setTexture2D=pe,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=ee,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=me,this.dispose=V}function Ym(i,e){function t(n,s=Pn){let r,a=Je.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===Jr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Po)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ro)return i.BYTE;if(n===Co)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===Zr)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===Kt)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Lo)return i.ALPHA;if(n===Do)return i.RGB;if(n===an)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===In)return i.DEPTH_STENCIL;if(n===Yr)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===Jn)return i.RG;if(n===Qr)return i.RG_INTEGER;if(n===jr)return i.RGBA_INTEGER;if(n===Is||n===Ps||n===Ls||n===Ds)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$r||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra||n===aa||n===oa||n===Ns||n===la)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===aa)return r.COMPRESSED_R11_EAC;if(n===oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ns)return r.COMPRESSED_RG11_EAC;if(n===la)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===xa||n===ya||n===Ma||n===Sa||n===_a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Ea||n===Aa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wa||n===Ta||n===Us||n===Ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Us)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:Km,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nl=class extends cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,v=null,M=typeof XRWebGLBinding<"u",m=new tl,f={},S=t.getContextAttributes(),R=null,E=null,w=[],A=[],g=new He,_=null,F=null,P=new Nt;P.viewport=new ht;let D=new Nt;D.viewport=new ht;let z=[P,D],J=new kr,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=w[Z];return pe===void 0&&(pe=new Di,w[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=w[Z];return pe===void 0&&(pe=new Di,w[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=w[Z];return pe===void 0&&(pe=new Di,w[Z]=pe),pe.getHandSpace()};function H(Z){let pe=A.indexOf(Z.inputSource);if(pe===-1)return;let $=w[pe];$!==void 0&&($.update(Z.inputSource,Z.frame,c||a),$.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<w.length;Z++){let pe=A[Z];pe!==null&&(A[Z]=null,w[Z].disconnect(pe))}I=null,V=null,m.reset();for(let Z in f)delete f[Z];if(e.setRenderTarget(R),d=null,u=null,p=null,s=null,E=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(g.width,g.height,!1),F!==null){let Z=F.camera;Z.fov=F.fov,Z.zoom=F.zoom,Z.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ne=null,ee=null;S.depth&&(ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=S.stencil?In:En,ne=S.stencil?oi:sn);let _e={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(_e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Zt(u.textureWidth,u.textureHeight,{format:an,type:Vt,depthTexture:new Tn(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let $={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Zt(d.framebufferWidth,d.framebufferHeight,{format:an,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let pe=0;pe<Z.removed.length;pe++){let $=Z.removed[pe],ne=A.indexOf($);ne>=0&&(A[ne]=null,w[ne].disconnect($))}for(let pe=0;pe<Z.added.length;pe++){let $=Z.added[pe],ne=A.indexOf($);if(ne===-1){for(let _e=0;_e<w.length;_e++)if(_e>=A.length){A.push($),ne=_e;break}else if(A[_e]===null){A[_e]=$,ne=_e;break}if(ne===-1)break}let ee=w[ne];ee&&ee.connect($)}}function W(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pe=Z.near,$=Z.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&($=m.depthFar)),J.near=D.near=P.near=pe,J.far=D.far=P.far=$,(I!==J.near||V!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),I=J.near,V=J.far),J.layers.mask=Z.layers.mask|6,P.layers.mask=J.layers.mask&-5,D.layers.mask=J.layers.mask&-3;let ne=Z.parent,ee=J.cameras;W(J,ne);for(let _e=0;_e<ee.length;_e++)W(ee[_e],ne);J.projectionMatrix.copy(P.projectionMatrix),J.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&Z.isPerspectiveCamera&&(F={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,J,ne)};function j(Z,pe,$){$===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy($.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(Z){return f[Z]};let te=null;function ye(Z,pe){if(h=pe.getViewerPose(c||a),v=pe,h!==null){let $=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let ne=!1;$.length!==J.cameras.length&&(J.cameras.length=0,ne=!0);for(let Me=0;Me<$.length;Me++){let Fe=$[Me],De=null;if(d!==null)De=d.getViewport(Fe);else{let We=p.getViewSubImage(u,Fe);De=We.viewport,Me===0&&(e.setRenderTargetTextures(E,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(E))}let Te=z[Me];Te===void 0&&(Te=new Nt,Te.layers.enable(Me),Te.viewport=new ht,z[Me]=Te),Te.matrix.fromArray(Fe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Fe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),Me===0&&(J.matrix.copy(Te.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ne===!0&&J.cameras.push(Te)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Me=p.getDepthInformation($[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,s.renderState)}if(ee&&ee.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Me=0;Me<$.length;Me++){let Fe=$[Me].camera;if(Fe){let De=f[Fe];De||(De=new xs,f[Fe]=De);let Te=p.getCameraImage(Fe);De.sourceTexture=Te}}}}for(let $=0;$<w.length;$++){let ne=A[$],ee=w[$];ne!==null&&ee!==void 0&&ee.update(ne,pe,c||a)}te&&te(Z,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),v=null}let Ce=new eh;Ce.setAnimationLoop(ye),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},jm=new it,hh=new Ne;hh.set(-1,0,0,0,1,0,0,0,1);function $m(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ho(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,R,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),R=S.envMap,E=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,S){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eg(i,e,t,n){let s={},r={};function a(S,R){let E=R.program;n.uniformBlockBinding(S,E,s[S.id])}function o(S,R){let E=s[S.id];E===void 0&&(v(S),E=l(S),s[S.id]=E,S.addEventListener("dispose",m));let w=R.program;n.updateUBOMapping(S,w);let A=e.render.frame;r[S.id]!==A&&(c(S),r[S.id]=A)}function l(S){let R=i.createBuffer(),E=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(S){let R=s[S.id],E=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let A=0,g=E.length;A<g;A++){let _=E[A];if(Array.isArray(_))for(let F=0,P=_.length;F<P;F++)h(_[F],A,F,w);else h(_,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,R,E,w){if(u(S,R,E,w)===!0){let A=S.__offset,g=S.value;if(Array.isArray(g)){let _=0;for(let F=0;F<g.length;F++){let P=g[F],D=M(P,!0);p(P,S.__data,_),_+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,S.__data)}}function p(S,R,E){typeof S=="number"||typeof S=="boolean"?R[E]=S:S.isMatrix3?(R[E]=S.elements[0],R[E+1]=S.elements[1],R[E+2]=S.elements[2],R[E+3]=0,R[E+4]=S.elements[3],R[E+5]=S.elements[4],R[E+6]=S.elements[5],R[E+7]=0,R[E+8]=S.elements[6],R[E+9]=S.elements[7],R[E+10]=S.elements[8],R[E+11]=0):ArrayBuffer.isView(S)?R.set(S.subarray(0,R.length-E),E):S.toArray(R,E)}function u(S,R,E,w){let A=S.value,g=R+"_"+E;if(Array.isArray(A)){w[g]===void 0&&(w[g]=[]);let _=w[g],F=!1;for(let P=0;P<A.length;P++)d(A[P],_,P)===!0&&(F=!0);return F}return d(A,w,g)}function d(S,R,E){if(R[E]===void 0)return typeof S=="number"||typeof S=="boolean"?R[E]=S:ArrayBuffer.isView(S)?R[E]=S.slice():R[E]=S.clone(),!0;{let w=R[E];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return R[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function v(S){let R=S.uniforms,E=0,w=16;for(let g=0,_=R.length;g<_;g++){let F=Array.isArray(R[g])?R[g]:[R[g]];for(let P=0,D=F.length;P<D;P++){let z=F[P],J=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(R[g])||Array.isArray(z.value),V=E;for(let k=0,ie=J.length;k<ie;k++){let W=J[k],j=M(W,I),te=E%w,ye=te%j.boundary,Ce=te+ye;E+=ye,Ce!==0&&w-Ce<j.storage&&(E+=w-Ce),k===0&&(V=E),E+=j.storage}let H=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new H((E-V)/Float32Array.BYTES_PER_ELEMENT),z.__offset=V}}let A=E%w;return A>0&&(E+=w-A),S.__size=E,S.__cache={},this}function M(S,R){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",S),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(S){let R=S.target;R.removeEventListener("dispose",m),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:f}}var tg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mn=null;function ng(){return mn===null&&(mn=new fs(tg,16,16,Jn,rn),mn.name="DFG_LUT",mn.minFilter=Ft,mn.magFilter=Ft,mn.wrapS=ln,mn.wrapT=ln,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}var Pa=class{constructor(e={}){let{canvas:t=bc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Vt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let M=d,m=new Set([jr,Qr,Kr]),f=new Set([Vt,sn,ki,oi,Jr,qr]),S=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},w=null,A=null,g=[],_=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,z=null,J=null,I=null,V=null;this._outputColorSpace=Xt;let H=0,k=0,ie=null,W=-1,j=null,te=new ht,ye=new ht,Ce=null,Z=new Ue(0),pe=0,$=t.width,ne=t.height,ee=1,_e=null,qe=null,Me=new ht(0,0,$,ne),Fe=new ht(0,0,$,ne),De=!1,Te=new kn,We=new wr,Ke=!1,ft=!1,et=new it,dt=new N,pt=new ht,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function mt(){return ie===null?ee:1}let L=n;function _t(y,C){return t.getContext(y,C)}let at,ot,me,xt,Ie,Oe,b,x,O,se,Q,oe,de,q,Y,ce,T,K,X,he,ae,le,we;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){let C="webgl2";if(L=_t(C,y),L===null)throw _t(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(y){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Le("WebGLRenderer: "+y.message),y}function Ge(){at=new fp(L),at.init(),ae=new Ym(L,at),ot=new np(L,at,e,ae),me=new Jm(L,at),ot.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),J=L.createFramebuffer(),I=L.createFramebuffer(),V=L.createFramebuffer(),xt=new gp(L),Ie=new Dm,Oe=new qm(L,at,me,Ie,ot,ae,xt),b=new dp(P),x=new vu(L),le=new ep(L,x),O=new pp(L,x,xt,le),se=new xp(L,O,x,le,xt),K=new vp(L,ot,Oe),Y=new ip(Ie),Q=new Lm(P,b,at,ot,le,Y),oe=new $m(P,Ie),de=new Um,q=new km(at),T=new $f(P,b,me,se,v,l),ce=new Zm(P,se,ot),we=new eg(L,xt,ot,me),X=new tp(L,at,xt),he=new mp(L,at,xt),xt.programs=Q.programs,P.capabilities=ot,P.extensions=at,P.properties=Ie,P.renderLists=de,P.shadowMap=ce,P.state=me,P.info=xt}M!==Vt&&(F=new Mp(M,t.width,t.height,o,s,r));let re=new nl(P,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize($,ne,!1))},this.getSize=function(y){return y.set($,ne)},this.setSize=function(y,C,G=!0){if(re.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,ne=C,t.width=Math.floor(y*ee),t.height=Math.floor(C*ee),G===!0&&(t.style.width=y+"px",t.style.height=C+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,y,C)},this.getDrawingBufferSize=function(y){return y.set($*ee,ne*ee).floor()},this.setDrawingBufferSize=function(y,C,G){$=y,ne=C,ee=G,t.width=Math.floor(y*G),t.height=Math.floor(C*G),this.setViewport(0,0,y,C)},this.setEffects=function(y){if(M===Vt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let C=0;C<y.length;C++)if(y[C].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,C,G,U){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,C,G,U),me.viewport(te.copy(Me).multiplyScalar(mt()).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,C,G,U){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,C,G,U),me.scissor(ye.copy(Fe).multiplyScalar(mt()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){me.setScissorTest(De=y)},this.setOpaqueSort=function(y){_e=y},this.setTransparentSort=function(y){qe=y},this.getClearColor=function(y){return y.copy(T.getClearColor())},this.setClearColor=function(){T.setClearColor(...arguments)},this.getClearAlpha=function(){return T.getClearAlpha()},this.setClearAlpha=function(){T.setClearAlpha(...arguments)},this.clear=function(y=!0,C=!0,G=!0){let U=0;if(y){let B=!1;if(ie!==null){let fe=ie.texture.format;B=m.has(fe)}if(B){let fe=ie.texture.type,Se=f.has(fe),ue=T.getClearColor(),xe=T.getClearAlpha(),Ae=ue.r,Be=ue.g,Xe=ue.b;Se?(S[0]=Ae,S[1]=Be,S[2]=Xe,S[3]=xe,L.clearBufferuiv(L.COLOR,0,S)):(R[0]=Ae,R[1]=Be,R[2]=Xe,R[3]=xe,L.clearBufferiv(L.COLOR,0,R))}else U|=L.COLOR_BUFFER_BIT}C&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),T.dispose(),de.dispose(),q.dispose(),Oe.dispose(),Ie.dispose(),b.dispose(),se.dispose(),O.dispose(),le.dispose(),we.dispose(),Q.dispose(),re.dispose(),re.removeEventListener("sessionstart",al),re.removeEventListener("sessionend",ol),qn.stop()};function Re(y){y.preventDefault(),Bo("WebGLRenderer: Context Lost."),D=!0}function ze(){Bo("WebGLRenderer: Context Restored."),D=!1;let y=xt.autoReset,C=ce.enabled,G=ce.autoUpdate,U=ce.needsUpdate,B=ce.type;Ge(),xt.autoReset=y,ce.enabled=C,ce.autoUpdate=G,ce.needsUpdate=U,ce.type=B}function ge(y){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function tt(y){let C=y.target;C.removeEventListener("dispose",tt),bt(C)}function bt(y){Ln(y),Ie.remove(y)}function Ln(y){let C=Ie.get(y).programs;C!==void 0&&(C.forEach(function(G){Q.releaseProgram(G)}),y.isShaderMaterial&&Q.releaseShaderCache(y))}this.renderBufferDirect=function(y,C,G,U,B,fe){C===null&&(C=nt);let Se=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=vh(y,C,G,U,B);me.setMaterial(U,Se);let xe=G.index,Ae=1;if(U.wireframe===!0){if(xe=O.getWireframeAttribute(G),xe===void 0)return;Ae=2}let Be=G.drawRange,Xe=G.attributes.position,be=Be.start*Ae,Ze=(Be.start+Be.count)*Ae;fe!==null&&(be=Math.max(be,fe.start*Ae),Ze=Math.min(Ze,(fe.start+fe.count)*Ae)),xe!==null?(be=Math.max(be,0),Ze=Math.min(Ze,xe.count)):Xe!=null&&(be=Math.max(be,0),Ze=Math.min(Ze,Xe.count));let gt=Ze-be;if(gt<0||gt===1/0)return;le.setup(B,U,ue,G,xe);let lt,st=X;if(xe!==null&&(lt=x.get(xe),st=he,st.setIndex(lt)),B.isMesh)U.wireframe===!0?(me.setLineWidth(U.wireframeLinewidth*mt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(B.isLine){let It=U.linewidth;It===void 0&&(It=1),me.setLineWidth(It*mt()),B.isLineSegments?st.setMode(L.LINES):B.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else B.isPoints?st.setMode(L.POINTS):B.isSprite&&st.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(at.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let It=B._multiDrawStarts,Ee=B._multiDrawCounts,Ot=B._multiDrawCount,Qe=xe?x.get(xe).bytesPerElement:1,Yn=Ie.get(U).currentProgram.getUniforms();for(let Pt=0;Pt<Ot;Pt++)Yn.setValue(L,"_gl_DrawID",Pt),st.render(It[Pt]/Qe,Ee[Pt])}else if(B.isInstancedMesh)st.renderInstances(be,gt,B.count);else if(G.isInstancedBufferGeometry){let It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,It);st.renderInstances(be,gt,Ee)}else st.render(be,gt)};function rl(y,C,G,U){z!==null&&y.isNodeMaterial&&z.setObject(U,y),Ke===!0&&Y.setState(y,G,!1),y.transparent===!0&&y.side===zt&&y.forceSinglePass===!1?(y.side=yt,y.needsUpdate=!0,qi(y,C,U),y.side=Zn,y.needsUpdate=!0,qi(y,C,U),y.side=zt):qi(y,C,U)}this.compile=function(y,C,G=null){G===null&&(G=y),z!==null&&z.renderStart(y,C,G),A=q.get(G),A.init(C),_.push(A),G.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),y!==G&&y.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),ft=this.localClippingEnabled,Ke=Y.init(this.clippingPlanes,ft),Ke===!0&&Y.setGlobalState(this.clippingPlanes,C),z!==null&&ce.render(A.state.shadowsArray,G,C);let U=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let fe=B.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){let ue=fe[Se];rl(ue,G,C,B),U.add(ue)}else rl(fe,G,C,B),U.add(fe)}),A=_.pop(),z!==null&&z.renderEnd(),U},this.compileAsync=function(y,C,G=null){let U=this.compile(y,C,G);return new Promise(B=>{function fe(){if(U.forEach(function(Se){let xe=Ie.get(Se).currentProgram;(xe===void 0||xe.isReady())&&U.delete(Se)}),U.size===0){B(y);return}setTimeout(fe,10)}at.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ua=null;function mh(y){Ua&&Ua(y)}function al(){qn.stop()}function ol(){qn.start()}let qn=new eh;qn.setAnimationLoop(mh),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(y){Ua=y,re.setAnimationLoop(y),y===null?qn.stop():qn.start()},re.addEventListener("sessionstart",al),re.addEventListener("sessionend",ol),this.render=function(y,C){if(C!==void 0&&C.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(y,C);let G=re.enabled===!0&&re.isPresenting===!0,U=F!==null&&(ie===null||G)&&F.begin(P,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(C),C=re.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,C,ie),A=q.get(y,_.length),A.init(C),A.state.textureUnits=Oe.getTextureUnits(),_.push(A),et.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?We.setFromArrayCamera(C):Te.setFromProjectionMatrix(et,Yt,C.reversedDepth),ft=this.localClippingEnabled,Ke=Y.init(this.clippingPlanes,ft),w=de.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Se=P.xr.getDepthSensingMesh();Se!==null&&Oa(Se,C,-1/0,P.sortObjects)}Oa(y,C,0,P.sortObjects),w.finish(),z!==null&&z.updateLights(A.state.lightsArray),P.sortObjects===!0&&w.sort(_e,qe),rt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,rt&&T.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Y.beginShadows();let B=A.state.shadowsArray;if(ce.render(B,y,C),Ke===!0&&Y.endShadows(),(U&&F.hasRenderPass())===!1){let Se=w.opaque,ue=w.transmissive;if(A.setupLights(),C.isArrayCamera){let xe=C.cameras;if(ue.length>0)for(let Ae=0,Be=xe.length;Ae<Be;Ae++){let Xe=xe[Ae];cl(Se,ue,y,Xe)}rt&&T.render(y);for(let Ae=0,Be=xe.length;Ae<Be;Ae++){let Xe=xe[Ae];ll(w,y,Xe,Xe.viewport)}}else ue.length>0&&cl(Se,ue,y,C),rt&&T.render(y),ll(w,y,C)}ie!==null&&k===0&&(Oe.updateMultisampleRenderTarget(ie),Oe.updateRenderTargetMipmap(ie)),U&&F.end(P),y.isScene===!0&&y.onAfterRender(P,y,C),le.resetDefaultState(),W=-1,j=null,_.pop(),_.length>0?(A=_[_.length-1],Oe.setTextureUnits(A.state.textureUnits),Ke===!0&&Y.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,z!==null&&z.renderEnd()};function Oa(y,C,G,U){if(y.visible===!1)return;if(y.layers.test(C.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(C);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){let Se=C.isArrayCamera?We:Te;if(!y.frustumCulled||y.intersectsFrustum(Se)){U&&pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(et);let ue=se.update(y),xe=y.material;xe.visible&&w.push(y,ue,xe,G,pt.z,null,C)}}else if(y.isMesh||y.isLine||y.isPoints){let Se=C.isArrayCamera?We:Te;if(!y.frustumCulled||y.intersectsFrustum(Se)){let ue=se.update(y),xe=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),pt.copy(ue.boundingSphere.center)),pt.applyMatrix4(y.matrixWorld).applyMatrix4(et)),Array.isArray(xe)){let Ae=ue.groups;for(let Be=0,Xe=Ae.length;Be<Xe;Be++){let be=Ae[Be],Ze=xe[be.materialIndex];Ze&&Ze.visible&&w.push(y,ue,Ze,G,pt.z,be,C)}}else xe.visible&&w.push(y,ue,xe,G,pt.z,null,C)}}}let fe=y.children;for(let Se=0,ue=fe.length;Se<ue;Se++)Oa(fe[Se],C,G,U)}function ll(y,C,G,U){let{opaque:B,transmissive:fe,transparent:Se}=y;A.setupLightsView(G),Ke===!0&&Y.setGlobalState(P.clippingPlanes,G),U&&me.viewport(te.copy(U)),B.length>0&&Vs(B,C,G),fe.length>0&&Vs(fe,C,G),Se.length>0&&Vs(Se,C,G),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function cl(y,C,G,U){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let be=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new Zt(1,1,{generateMipmaps:!0,type:be?rn:Vt,minFilter:Cn,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let fe=A.state.transmissionRenderTarget[U.id],Se=U.viewport||te;fe.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);let ue=P.getRenderTarget(),xe=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(Z),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),rt&&T.render(G);let Be=P.toneMapping;P.toneMapping=pn;let Xe=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),Ke===!0&&Y.setGlobalState(P.clippingPlanes,U),Vs(y,G,U),Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe),at.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ze=0,gt=C.length;Ze<gt;Ze++){let lt=C[Ze],{object:st,geometry:It,material:Ee,group:Ot}=lt;if(Ee.side===zt&&st.layers.test(U.layers)){let Qe=Ee.side;Ee.side=yt,Ee.needsUpdate=!0,hl(st,G,U,It,Ee,Ot),Ee.side=Qe,Ee.needsUpdate=!0,be=!0}}be===!0&&(Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe))}P.setRenderTarget(ue,xe,Ae),P.setClearColor(Z,pe),Xe!==void 0&&(U.viewport=Xe),P.toneMapping=Be}function Vs(y,C,G){let U=C.isScene===!0?C.overrideMaterial:null;for(let B=0,fe=y.length;B<fe;B++){let Se=y[B],{object:ue,geometry:xe,group:Ae}=Se,Be=Se.material;Be.allowOverride===!0&&U!==null&&(Be=U),ue.layers.test(G.layers)&&hl(ue,C,G,xe,Be,Ae)}}function hl(y,C,G,U,B,fe){z!==null&&B.isNodeMaterial&&z.setObject(y,B),y.onBeforeRender(P,C,G,U,B,fe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(P,C,G,U,y,fe),B.transparent===!0&&B.side===zt&&B.forceSinglePass===!1?(B.side=yt,B.needsUpdate=!0,P.renderBufferDirect(G,C,U,B,y,fe),B.side=Zn,B.needsUpdate=!0,P.renderBufferDirect(G,C,U,B,y,fe),B.side=zt):P.renderBufferDirect(G,C,U,B,y,fe),y.onAfterRender(P,C,G,U,B,fe)}function ul(y){let C=0;for(let G of y)G.texture!==null&&C++;return C}function qi(y,C,G){C.isScene!==!0&&(C=nt);let U=Ie.get(y),B=A.state.lights,fe=A.state.shadowsArray,Se=B.state.version,ue=Q.getParameters(y,B.state,fe,C,G,A.state.lightProbeGridArray),xe=Q.getProgramCacheKey(ue),Ae=U.programs;U.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;let Be=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;U.envMap=b.get(y.envMap||U.environment,Be),U.envMapRotation=U.environment!==null&&y.envMap===null?C.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",tt),Ae=new Map,U.programs=Ae,U.programVariants=new Map);let Xe=Ae.get(xe);if(Xe!==void 0){if(U.currentProgram===Xe&&U.lightsStateVersion===Se)return fl(y,ue),Xe}else ue.uniforms=Q.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,G,ue),y.onBeforeCompile(ue,P),Xe=Q.acquireProgram(ue,xe),Ae.set(xe,Xe),U.uniforms=ue.uniforms;let be=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=Y.uniform),fl(y,ue),U.needsLights=yh(y),U.lightsStateVersion=Se,U.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.sunLights.value=B.state.sun,be.sunLightShadows.value=B.state.sunShadow,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.sunShadowMatrix.value=B.state.sunShadowMatrix,be.sunShadowCascade.value=B.state.sunShadowCascade,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),U.numLightProbeGrids=ul(A.state.lightProbeGridArray),U.currentProgram=Xe,U.uniformsList=null,Xe}function gh(y,C,G,U,B){let fe=Ie.get(y),Se=fe.currentProgram.id+","+U+","+B,ue=fe.programVariants.get(Se);return ue===void 0?(ue=qi(y,C,G),fe.programVariants.set(Se,ue)):(fe.currentProgram=ue,fe.uniformsList=null,fe.outputColorSpace=U,fe.toneMapping=B),ue}function dl(y){if(y.uniformsList===null){let C=y.currentProgram.getUniforms();y.uniformsList=Wi.seqWithValue(C.seq,y.uniforms)}return y.uniformsList}function fl(y,C){let G=Ie.get(y);G.outputColorSpace=C.outputColorSpace,G.batching=C.batching,G.batchingColor=C.batchingColor,G.instancing=C.instancing,G.instancingColor=C.instancingColor,G.instancingMorph=C.instancingMorph,G.skinning=C.skinning,G.morphTargets=C.morphTargets,G.morphNormals=C.morphNormals,G.morphColors=C.morphColors,G.morphTargetsCount=C.morphTargetsCount,G.numClippingPlanes=C.numClippingPlanes,G.numIntersection=C.numClipIntersection,G.vertexAlphas=C.vertexAlphas,G.vertexTangents=C.vertexTangents,G.toneMapping=C.toneMapping}function vh(y,C,G,U,B){C.isScene!==!0&&(C=nt),Oe.resetTextureUnits();let fe=C.fog,Se=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,ue=ie===null?P.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ae=b.get(U.envMap||Se,xe),Be=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xe=!!G.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),be=!!G.morphAttributes.position,Ze=!!G.morphAttributes.normal,gt=!!G.morphAttributes.color,lt=pn;U.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=P.toneMapping);let st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,It=st!==void 0?st.length:0,Ee=Ie.get(U),Ot=A.state.lights;if(Ke===!0&&(ft===!0||y!==j)){let ut=y===j&&U.id===W;Y.setState(U,y,ut)}let Qe=!1,Yn=!1;U.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==Ae||U.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Y.numPlanes||Ee.numIntersection!==Y.numIntersection)||Ee.vertexAlphas!==Be||Ee.vertexTangents!==Xe||Ee.morphTargets!==be||Ee.morphNormals!==Ze||Ee.morphColors!==gt||Ee.morphTargetsCount!==It||Ee.numLightProbeGrids!==ul(A.state.lightProbeGridArray)?Qe=!0:(Ee.outputColorSpace!==ue||Ee.toneMapping!==lt)&&(Yn=!0):(Qe=!0,Ee.__version=U.version);let Pt=Ee.currentProgram;(Qe===!0||Yn===!0)&&(Pt=Yn===!0?gh(U,C,B,ue,lt):qi(U,C,B),z&&U.isNodeMaterial&&z.onUpdateProgram(U,Pt,Ee));let Hs=!1,Dn=!1,Kn=!1,Ye=Pt.getUniforms(),Rt=Ee.uniforms;if(me.useProgram(Pt.program)&&(Hs=!0,Dn=!0,Kn=!0),U.id!==W&&(W=U.id,Dn=!0),Hs||j!==y){me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ye.setValue(L,"projectionMatrix",y.projectionMatrix),Ye.setValue(L,"viewMatrix",y.matrixWorldInverse);let Et=Ye.map.cameraPosition;Et!==void 0&&Et.setValue(L,dt.setFromMatrixPosition(y.matrixWorld)),ot.logarithmicDepthBuffer&&Ye.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ye.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Dn=!0,Kn=!0)}if(Ee.needsLights&&(Ot.state.sunShadowMap.length>0&&Ye.setValue(L,"sunShadowMap",Ot.state.sunShadowMap,Oe),Ot.state.directionalShadowMap.length>0&&Ye.setValue(L,"directionalShadowMap",Ot.state.directionalShadowMap,Oe),Ot.state.spotShadowMap.length>0&&Ye.setValue(L,"spotShadowMap",Ot.state.spotShadowMap,Oe),Ot.state.pointShadowMap.length>0&&Ye.setValue(L,"pointShadowMap",Ot.state.pointShadowMap,Oe)),B.isSkinnedMesh){Ye.setOptional(L,B,"bindMatrix"),Ye.setOptional(L,B,"bindMatrixInverse");let ut=B.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Ye.setValue(L,"boneTexture",ut.boneTexture,Oe))}B.isBatchedMesh&&(Ye.setOptional(L,B,"batchingTexture"),Ye.setValue(L,"batchingTexture",B._matricesTexture,Oe),Ye.setOptional(L,B,"batchingIdTexture"),Ye.setValue(L,"batchingIdTexture",B._indirectTexture,Oe),Ye.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Ye.setValue(L,"batchingColorTexture",B._colorsTexture,Oe));let Qt=G.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&K.update(B,G,Pt),(Dn||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,Ye.setValue(L,"receiveShadow",B.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(Rt.envMapIntensity.value=C.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=ng()),Dn){if(Ye.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&xh(Rt,Kn),fe&&U.fog===!0&&oe.refreshFogUniforms(Rt,fe),oe.refreshMaterialUniforms(Rt,U,ee,ne,A.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let ut=E,Et=0;for(let vn of A.state.lightProbeGridArray)vn.texture!==null&&(ut.textures[Et]=vn.texture,ut.min[Et]=vn.boundingBox.min,ut.max[Et]=vn.boundingBox.max,ut.resolution[Et]=vn.resolution,Et++);for(let vn in ut)ut[vn].length=Et;Rt.probesSH.value=ut.textures,Rt.probesMin.value=ut.min,Rt.probesMax.value=ut.max,Rt.probesResolution.value=ut.resolution}Wi.upload(L,dl(Ee),Rt,Oe)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Wi.upload(L,dl(Ee),Rt,Oe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ye.setValue(L,"center",B.center),Ye.setValue(L,"modelViewMatrix",B.modelViewMatrix),Ye.setValue(L,"normalMatrix",B.normalMatrix),Ye.setValue(L,"modelMatrix",B.matrixWorld),U.uniformsGroups!==void 0){let ut=U.uniformsGroups;for(let Et=0,vn=ut.length;Et<vn;Et++){let ml=ut[Et];we.update(ml,Pt),we.bind(ml,Pt)}}return Pt}function xh(y,C){y.ambientLightColor.needsUpdate=C,y.lightProbe.needsUpdate=C,y.sunLights.needsUpdate=C,y.sunLightShadows.needsUpdate=C,y.directionalLights.needsUpdate=C,y.directionalLightShadows.needsUpdate=C,y.pointLights.needsUpdate=C,y.pointLightShadows.needsUpdate=C,y.spotLights.needsUpdate=C,y.spotLightShadows.needsUpdate=C,y.rectAreaLights.needsUpdate=C,y.hemisphereLights.needsUpdate=C}function yh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,C,G){let U=Ie.get(y);U.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Ie.get(y.texture).__webglTexture=C,Ie.get(y.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:G,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,C){let G=Ie.get(y);G.__webglFramebuffer=C,G.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(y,C=0,G=0){ie=y,H=C,k=G;let U=null,B=!1,fe=!1;if(y){let ue=Ie.get(y);if(ue.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(y.viewport),ye.copy(y.scissor),Ce=y.scissorTest,me.viewport(te),me.scissor(ye),me.setScissorTest(Ce),W=-1;return}else if(ue.__webglFramebuffer===void 0)Oe.setupRenderTarget(y);else if(ue.__hasExternalTextures)Oe.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Be=y.depthTexture;if(ue.__boundDepthTexture!==Be){if(Be!==null&&Ie.has(Be)&&(y.width!==Be.image.width||y.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(y)}}let xe=y.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);let Ae=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[C])?U=Ae[C][G]:U=Ae[C],B=!0):y.samples>0&&Oe.useMultisampledRTT(y)===!1?U=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[G]:U=Ae,te.copy(y.viewport),ye.copy(y.scissor),Ce=y.scissorTest}else te.copy(Me).multiplyScalar(ee).floor(),ye.copy(Fe).multiplyScalar(ee).floor(),Ce=De;if(G!==0&&(U=J),me.bindFramebuffer(L.FRAMEBUFFER,U)&&me.drawBuffers(y,U),me.viewport(te),me.scissor(ye),me.setScissorTest(Ce),B){let ue=Ie.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,ue.__webglTexture,G)}else if(fe){let ue=C;for(let xe=0;xe<y.textures.length;xe++){let Ae=Ie.get(y.textures[xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xe,Ae.__webglTexture,G,ue)}}else if(y!==null&&G!==0){let ue=Ie.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,G)}W=-1};function pl(y){let C=Ie.get(y);return(C.__readFormat!==y.format||C.__readType!==y.type)&&(C.__readFormat=y.format,C.__readType=y.type,C.__formatReadable=ot.textureFormatReadable(y.format),C.__typeReadable=ot.textureTypeReadable(y.type)),C}this.readRenderTargetPixels=function(y,C,G,U,B,fe,Se,ue=0){if(!(y&&y.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){me.bindFramebuffer(L.FRAMEBUFFER,xe);try{let Ae=y.textures[ue],Be=Ae.format,Xe=Ae.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);let be=pl(Ae);if(be.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=y.width-U&&G>=0&&G<=y.height-B&&L.readPixels(C,G,U,B,ae.convert(Be),ae.convert(Xe),fe)}finally{let Ae=ie!==null?Ie.get(ie).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,C,G,U,B,fe,Se,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(C>=0&&C<=y.width-U&&G>=0&&G<=y.height-B){me.bindFramebuffer(L.FRAMEBUFFER,xe);let Ae=y.textures[ue],Be=Ae.format,Xe=Ae.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);let be=pl(Ae);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(C,G,U,B,ae.convert(Be),ae.convert(Xe),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let gt=ie!==null?Ie.get(ie).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,gt);let lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ac(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ze),L.deleteSync(lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,C=null,G=0){let U=Math.pow(2,-G),B=Math.floor(y.image.width*U),fe=Math.floor(y.image.height*U),Se=C!==null?C.x:0,ue=C!==null?C.y:0;Oe.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Se,ue,B,fe),me.unbindTexture()},this.copyTextureToTexture=function(y,C,G=null,U=null,B=0,fe=0){let Se,ue,xe,Ae,Be,Xe,be,Ze,gt,lt=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(G!==null)Se=G.max.x-G.min.x,ue=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,Be=G.min.y,Xe=G.isBox3?G.min.z:0;else{let Ye=Math.pow(2,-B);Se=Math.floor(lt.width*Ye),ue=Math.floor(lt.height*Ye),y.isDataArrayTexture?xe=lt.depth:y.isData3DTexture?xe=Math.floor(lt.depth*Ye):xe=1,Ae=0,Be=0,Xe=0}U!==null?(be=U.x,Ze=U.y,gt=U.z):(be=0,Ze=0,gt=0);let st=ae.convert(C.format),It=ae.convert(C.type),Ee;C.isData3DTexture?(Oe.setTexture3D(C,0),Ee=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Oe.setTexture2DArray(C,0),Ee=L.TEXTURE_2D_ARRAY):(Oe.setTexture2D(C,0),Ee=L.TEXTURE_2D),me.activeTexture(L.TEXTURE0),me.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),me.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),me.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Ot=me.getParameter(L.UNPACK_ROW_LENGTH),Qe=me.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=me.getParameter(L.UNPACK_SKIP_PIXELS),Pt=me.getParameter(L.UNPACK_SKIP_ROWS),Hs=me.getParameter(L.UNPACK_SKIP_IMAGES);me.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),me.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),me.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),me.pixelStorei(L.UNPACK_SKIP_ROWS,Be),me.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);let Dn=y.isDataArrayTexture||y.isData3DTexture,Kn=C.isDataArrayTexture||C.isData3DTexture;if(y.isDepthTexture){let Ye=Ie.get(y),Rt=Ie.get(C),Qt=Ie.get(Ye.__renderTarget),ut=Ie.get(Rt.__renderTarget);me.bindFramebuffer(L.READ_FRAMEBUFFER,Qt.__webglFramebuffer),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Et=0;Et<xe;Et++)Dn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.get(y).__webglTexture,B,Xe+Et),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.get(C).__webglTexture,fe,gt+Et)),L.blitFramebuffer(Ae,Be,Ae+Se,Be+ue,be,Ze,be+Se,Ze+ue,L.DEPTH_BUFFER_BIT,L.NEAREST);me.bindFramebuffer(L.READ_FRAMEBUFFER,null),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Ie.has(y)){let Ye=Ie.get(y),Rt=Ie.get(C);me.bindFramebuffer(L.READ_FRAMEBUFFER,I),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let Qt=0;Qt<xe;Qt++)Dn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,B,Xe+Qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,B),Kn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,fe,gt+Qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rt.__webglTexture,fe),B!==0?L.blitFramebuffer(Ae,Be,Ae+Se,Be+ue,be,Ze,be+Se,Ze+ue,L.COLOR_BUFFER_BIT,L.NEAREST):Kn?L.copyTexSubImage3D(Ee,fe,be,Ze,gt+Qt,Ae,Be,Se,ue):L.copyTexSubImage2D(Ee,fe,be,Ze,Ae,Be,Se,ue);me.bindFramebuffer(L.READ_FRAMEBUFFER,null),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ee,fe,be,Ze,gt,Se,ue,xe,st,It,lt.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,fe,be,Ze,gt,Se,ue,xe,st,lt.data):L.texSubImage3D(Ee,fe,be,Ze,gt,Se,ue,xe,st,It,lt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,be,Ze,Se,ue,st,It,lt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,be,Ze,lt.width,lt.height,st,lt.data):L.texSubImage2D(L.TEXTURE_2D,fe,be,Ze,Se,ue,st,It,lt);me.pixelStorei(L.UNPACK_ROW_LENGTH,Ot),me.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),me.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),me.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),me.pixelStorei(L.UNPACK_SKIP_IMAGES,Hs),fe===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(Ee),me.unbindTexture()},this.initRenderTarget=function(y){Ie.get(y).__webglFramebuffer===void 0&&Oe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){H=0,k=0,ie=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Na=class extends ni{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Vn;e.deleteAttribute("uv");let t=new nn({side:yt}),n=new nn,s=new Es(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new $e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ms(e,n,6),o=new Tt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new $e(e,Ji(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new $e(e,Ji(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new $e(e,Ji(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let p=new $e(e,Ji(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new $e(e,Ji(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new $e(e,Ji(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ji(i){return new ii({color:0,emissive:16777215,emissiveIntensity:i})}var uh=20,il=46,dh=[73,73,73,73,74,74,75,75,76,78,78,76,74,72,71,71,71,71,74,81,97,117,135,145,147,146,150,162,182,201,214,220,227,239,259,282,299,306,308,308,307,302,292,274,253,237,73,73,73,73,74,74,74,75,76,77,78,77,75,73,72,71,71,72,76,86,103,124,141,150,152,153,159,172,190,208,219,225,233,247,267,287,301,307,308,307,304,296,282,263,242,229,74,73,73,73,73,74,74,75,76,77,78,78,76,75,73,73,74,76,83,96,116,136,151,159,163,168,177,190,206,219,228,236,247,262,281,296,305,307,307,304,296,284,266,245,228,217,74,73,73,73,73,73,74,74,75,76,77,78,77,76,76,77,80,86,96,113,132,150,162,171,180,191,202,214,226,235,243,254,267,283,296,305,307,306,303,295,283,266,246,228,216,209,73,73,73,73,73,73,74,74,75,76,77,78,79,79,81,86,93,103,116,133,149,163,175,188,203,217,228,238,247,256,265,278,291,303,310,311,307,301,293,281,264,245,228,215,208,205,73,73,73,73,73,73,73,74,74,75,77,78,81,84,89,99,111,124,138,152,164,176,190,208,227,242,251,259,269,280,292,304,314,319,318,312,302,289,275,259,243,227,215,208,204,203,71,72,72,72,72,72,73,73,74,75,78,81,85,91,100,113,129,144,157,167,176,188,206,229,249,262,269,276,288,303,316,326,330,328,319,306,290,271,253,237,224,213,207,203,201,200,69,70,71,72,72,72,72,73,75,78,82,88,95,104,115,130,145,160,172,180,188,200,221,247,267,278,283,291,305,321,334,339,337,328,312,293,272,251,233,219,210,204,200,196,193,191,66,67,69,70,71,72,72,74,77,84,93,103,113,124,135,148,162,176,186,193,200,215,237,262,281,291,297,306,319,333,342,342,334,318,297,275,253,235,220,209,200,194,188,183,177,174,66,67,68,69,71,72,73,77,84,96,111,125,137,147,157,167,180,192,202,208,216,231,254,276,292,302,309,318,329,338,340,335,322,302,280,258,239,224,212,200,189,179,170,162,155,150,70,69,69,70,71,73,77,85,98,116,135,150,162,170,177,186,198,211,220,226,234,250,270,287,300,309,317,325,332,335,332,321,305,285,265,246,231,218,204,189,174,160,149,140,133,129,81,78,75,74,75,80,88,101,119,140,160,174,183,190,197,206,218,230,239,245,254,267,283,295,304,311,319,326,329,328,321,307,290,273,255,239,223,208,193,175,157,142,131,123,118,115,98,94,88,85,86,94,106,123,143,165,184,197,206,213,221,230,241,251,258,263,271,281,292,300,306,312,318,322,323,319,309,295,280,265,248,231,212,194,177,160,144,131,121,115,111,109,115,111,106,102,105,114,129,147,165,185,204,219,229,238,247,256,265,271,274,277,283,291,298,303,307,311,315,317,315,310,300,287,273,258,240,219,198,179,163,149,137,126,117,111,107,105,129,126,123,122,127,137,151,166,181,201,221,238,251,261,270,279,286,290,289,289,292,297,302,306,308,310,311,310,308,302,293,280,265,248,228,206,185,168,155,144,134,125,116,108,102,100,139,138,138,141,147,156,167,178,193,213,234,253,266,276,285,296,305,308,305,302,303,306,309,310,310,309,308,306,302,296,285,270,252,234,214,194,177,163,151,141,132,123,113,103,95,90,147,147,150,155,161,169,178,189,205,225,247,264,276,285,296,310,322,327,325,320,318,319,318,317,314,310,306,303,298,290,276,258,238,219,201,186,172,160,148,138,128,118,107,94,84,79,152,153,157,163,169,177,187,201,220,241,259,273,283,293,307,324,339,346,345,341,337,333,329,324,317,310,304,299,293,282,265,245,225,208,194,181,170,157,143,130,120,110,98,85,74,68,155,157,162,168,175,185,199,218,238,257,271,281,292,305,322,339,353,360,360,357,352,346,337,328,319,310,302,294,285,272,254,235,217,202,189,178,165,149,132,119,108,99,88,76,67,62,158,161,167,174,183,197,216,237,256,272,283,292,305,321,339,354,365,370,371,369,364,355,343,330,318,307,297,288,276,263,247,230,214,200,186,173,156,137,118,104,95,87,78,69,63,60,163,167,174,183,195,213,234,254,272,285,297,308,323,339,355,366,374,380,383,383,379,368,351,333,317,304,293,282,271,258,243,228,212,197,182,166,146,123,103,91,83,77,71,65,61,59,171,177,185,195,210,229,249,267,283,298,312,327,342,356,368,376,385,393,400,403,399,386,364,340,319,303,290,279,269,257,242,225,208,192,176,157,134,111,93,82,76,70,65,62,60,60,182,189,198,210,226,244,261,277,292,309,328,345,358,369,378,387,399,413,423,426,421,406,382,354,327,305,290,279,270,258,241,221,201,184,168,147,123,101,86,78,72,67,63,61,60,60,195,203,213,226,240,255,270,286,303,322,342,358,370,379,389,403,420,436,447,447,439,421,397,369,340,314,294,280,270,257,237,214,193,175,157,135,112,94,82,75,70,64,61,60,60,60,210,217,228,239,250,263,277,294,314,335,353,367,378,390,405,424,444,459,466,462,449,429,406,380,353,324,300,282,269,253,230,205,184,165,145,122,101,87,79,73,68,63,60,59,59,59,225,231,240,249,258,268,282,302,324,345,361,373,387,405,426,449,467,477,478,470,452,429,405,384,361,333,305,284,267,247,222,196,175,155,132,109,91,81,75,71,66,61,58,57,58,58,239,244,250,257,264,273,287,308,332,352,367,380,399,423,450,471,484,489,487,475,453,425,400,381,362,336,308,284,265,242,215,190,169,146,121,98,83,76,72,68,64,59,56,55,55,55,252,256,260,265,270,278,293,316,340,359,373,389,413,443,470,487,495,496,492,478,452,421,394,375,357,333,306,283,263,239,211,186,165,141,115,92,79,73,70,66,62,56,52,51,50,50,264,265,268,271,275,283,301,325,348,365,379,399,429,460,484,497,501,500,495,480,453,419,390,370,350,326,301,281,262,239,210,185,164,140,113,90,77,72,68,64,58,51,46,43,42,42,271,271,273,274,277,287,306,332,354,370,385,410,442,473,493,502,504,503,497,482,453,417,387,365,343,317,294,277,261,238,211,185,164,140,113,91,78,72,68,62,53,45,39,36,35,35,273,274,274,275,278,288,309,335,357,373,390,417,452,481,498,504,506,504,498,481,451,415,385,361,338,312,290,275,261,239,212,187,165,141,114,92,79,73,68,61,52,44,38,36,35,35,274,274,274,275,279,290,310,337,359,374,392,421,456,485,500,506,507,505,497,478,447,412,382,360,337,311,289,275,260,240,214,189,168,145,118,95,82,75,70,64,56,49,45,43,42,42,275,275,275,276,280,291,312,338,359,375,393,421,457,486,501,507,507,505,496,475,444,409,381,360,338,313,292,276,261,241,217,194,174,152,126,102,87,79,74,69,63,57,53,51,50,50,275,275,275,277,281,291,312,338,360,375,392,420,455,485,501,506,507,503,493,472,440,406,380,360,339,314,293,276,261,243,222,201,182,162,138,114,96,85,79,75,70,65,61,58,57,56,275,275,276,277,281,291,312,338,360,374,391,417,450,480,497,503,503,498,485,463,432,401,378,359,337,312,290,274,260,244,226,207,189,172,151,128,107,93,84,79,76,72,68,64,62,61,276,276,276,276,280,290,311,337,359,373,387,410,440,468,487,494,493,484,468,445,417,392,373,355,332,307,286,271,258,243,227,209,194,179,161,141,120,102,89,83,79,77,74,71,68,67,276,275,275,276,279,289,308,333,355,370,382,399,423,448,467,476,472,460,442,421,399,381,366,348,325,300,282,269,257,242,225,208,194,182,168,151,130,109,94,85,82,80,78,77,75,74,275,275,275,276,278,286,302,325,347,364,376,388,404,423,439,446,442,430,414,398,383,371,357,338,315,293,278,267,256,240,222,205,192,182,170,155,135,114,97,87,83,82,81,80,79,79,275,275,275,276,277,283,294,313,334,353,368,378,389,400,410,414,411,402,391,381,370,359,344,325,303,286,274,265,253,236,216,200,188,180,170,155,136,115,98,88,83,82,82,81,81,81,275,275,275,276,277,280,287,300,318,340,358,371,379,385,389,390,387,381,375,367,356,342,326,309,292,279,270,260,245,227,208,193,184,177,168,154,134,115,99,89,84,82,82,82,82,82,275,275,276,276,277,278,281,289,305,326,348,364,372,375,375,373,369,364,359,349,336,321,306,293,282,273,262,249,231,213,197,186,180,175,167,152,133,115,101,92,87,84,82,82,82,82,275,276,276,276,276,277,279,284,296,315,338,353,361,362,360,355,349,343,336,327,314,301,290,282,274,264,250,233,214,198,187,181,177,174,166,151,132,115,104,96,90,86,83,82,82,82,276,276,276,276,276,277,278,281,290,306,324,336,341,341,338,332,324,317,311,304,295,286,280,274,265,252,233,214,197,186,180,178,176,173,166,152,133,117,107,100,95,90,86,83,82,82,276,276,276,276,277,277,277,279,286,297,308,315,316,315,313,308,302,296,292,288,283,278,273,266,253,235,214,197,185,179,177,176,176,174,167,153,135,119,109,104,100,95,90,86,83,82,276,276,276,277,277,277,277,278,282,288,293,296,295,294,293,291,288,285,283,281,278,274,268,256,238,216,197,184,178,175,175,176,176,174,168,156,139,122,112,106,103,100,95,90,86,83,277,277,277,277,277,277,277,277,279,281,284,284,284,284,284,283,282,281,280,279,276,272,263,247,224,201,186,177,174,174,175,176,176,175,170,160,144,126,114,108,105,103,99,94,89,86,277,277,277,277,277,277,277,277,278,279,280,280,280,280,281,281,281,280,280,278,276,271,260,241,216,194,180,174,173,173,174,176,176,175,172,163,147,129,115,108,106,104,102,97,92,87],ig="data:image/png;base64,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",sg=[[842.5,276.3],[805,292.4],[760,314.9],[717.7,339.1],[684.8,383.3],[640,404.5],[595,421.7],[551.2,437.5],[552.1,481],[558,526],[555.7,571],[550.2,616],[548,661],[545.5,706],[535.4,751],[509.4,796],[466,836.5],[448.6,845.6]],ci=444.49,hi=458.62,fh={cable:[1776415,.35,0],hv:[10230812,.35,0],duct:[9473413,.9,0],pipe:[8359318,.5,.2],structure:[10855066,.85,0]},ks=(i,e)=>{let t=Math.max(0,Math.min(il-1.001,i/uh)),n=Math.max(0,Math.min(dh.length/il-1.001,e/uh)),s=t|0,r=n|0,a=t-s,o=n-r,l=(c,h)=>dh[h*il+c]/10;return(l(s,r)*(1-a)+l(s+1,r)*a)*(1-o)+(l(s,r+1)*(1-a)+l(s+1,r+1)*a)*o},ui=[[0,.04,150,1],[.07,.05,3,.12],[.13,.12,2.6,.06],[.2,.22,-2.2,.04],[.32,.4,-2,.04],[.44,.56,-2,.04],[.56,.7,-1.8,.04],[.66,.78,-1.6,.05],[.76,.8,-1.4,.05],[.82,.8,-1.4,.05],[.9,.84,70,.6],[1,.9,200,1]],sl=[543,710,26.2];async function ph(i){let e=matchMedia("(max-width:800px)").matches,t;try{t=new Pa({canvas:i.canvas,antialias:!e,alpha:!1})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.25:1.6)),t.localClippingEnabled=!0,t.toneMapping=Rs,t.toneMappingExposure=.85;let n=new ni,s=new Nt(55,1,.3,9e3),r=new Xi(t);n.environment=r.fromScene(new Na,.04).texture,n.environmentIntensity=.3;let a=new Gt,o=new Gt;function l($,ne,ee){let _e=new ys(6e3,24,16),qe=[],Me=_e.attributes.position,Fe=new Ue($),De=new Ue(ne),Te=new Ue;for(let Ke=0;Ke<Me.count;Ke++){let ft=Hi.clamp((Me.getY(Ke)/6e3+.15)/.9,0,1);Te.copy(De).lerp(Fe,Math.pow(ft,.7)),qe.push(Te.r,Te.g,Te.b)}_e.setAttribute("color",new Ct(qe,3));let We=new $e(_e,new wn({vertexColors:!0,side:yt,fog:!1,depthWrite:!1,clippingPlanes:[ee]}));return We.renderOrder=-10,n.add(We),We}l(2898514,724758,o);let c=l(6265814,14674418,a);n.fog=new hs(13616300,160,1700),n.add(new Ss(14675711,7035461,.7));let h=new ws(16773590,2.6);h.position.set(-400,700,300),n.add(h);let p=await(await fetch(i.url)).arrayBuffer(),u=new Uint8Array(p),d=u[0]===31&&u[1]===139?new Uint8Array(await new Response(new Blob([p]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()):u,M=new DataView(d.buffer).getUint32(0,!0),m=JSON.parse(new TextDecoder().decode(d.subarray(4,4+M))),f=4+M,S=m.min,R=[m.max[0]-m.min[0],m.max[1]-m.min[1],m.max[2]-m.min[2]],E={tris:0,objs:m.objs||0},w={};for(let $ of m.groups){let ne=$.nv*6,ee=$.nt*12,_e=new Uint16Array(d.buffer.slice(d.byteOffset+f,d.byteOffset+f+ne));f+=ne;let qe=new Uint32Array(d.buffer.slice(d.byteOffset+f,d.byteOffset+f+ee));f+=ee;let Me=new Float32Array($.nv*3);for(let De=0;De<$.nv;De++){let Te=_e[De*3]/65535*R[0]-ci,We=_e[De*3+1]/65535*R[1]-hi,Ke=_e[De*3+2]/65535*R[2];Me[De*3]=Te,Me[De*3+1]=Ke,Me[De*3+2]=-We}let Fe=new tn;Fe.setAttribute("position",new kt(Me,3)),Fe.setIndex(new kt(qe,1)),Fe.computeVertexNormals(),E.tris+=$.nt,w[$.name+"|"+$.color]=Fe}{let $=new Rn(24e3,24e3);$.rotateX(-Math.PI/2);let ne=new $e($,new nn({color:8020807,roughness:1,clippingPlanes:[a]}));ne.position.y=8,n.add(ne);let ee=new $e($,new wn({color:725017,fog:!1,clippingPlanes:[o]}));ee.position.y=8,n.add(ee)}for(let[$,ne]of Object.entries(w)){let[ee,_e]=$.split("|"),qe=parseInt(_e,16)||8952234,Me=new $e(ne,new ii({color:qe,fog:!1,clippingPlanes:[o],emissive:qe,emissiveIntensity:.45}));n.add(Me);let[Fe,De,Te]=fh[ee]||fh.duct,We=new Ue(Fe);ee==="cable"&&We.lerp(new Ue(qe),.22);let Ke=new $e(ne,new nn({color:We,roughness:De,metalness:Te,flatShading:ee!=="cable",clippingPlanes:[a]}));n.add(Ke)}let A=($,ne,ee)=>new N($-ci,ee,hi-ne),g=new Ui(sg.map($=>A($[0],$[1],0)),!1,"centripetal"),_=[],F=null;{let $=document.createElement("canvas");$.width=$.height=256;let ne=$.getContext("2d");ne.fillStyle="#c8b189",ne.fillRect(0,0,256,256);for(let nt=0;nt<5e3;nt++){let rt=150+Math.random()*90|0;ne.fillStyle="rgba("+rt+","+(rt-18)+","+(rt-55)+","+(.25+Math.random()*.35)+")",ne.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}let ee=new Ni($);ee.wrapS=ee.wrapT=Ri,ee.repeat.set(120,120),ee.anisotropy=4;let qe=((nt,rt)=>{let mt=new Rn(nt,rt,Math.round(nt/12),Math.round(rt/12));mt.rotateX(-Math.PI/2);let L=mt.attributes.position;for(let _t=0;_t<L.count;_t++){let at=L.getX(_t),ot=L.getZ(_t);L.setY(_t,ks(at+ci,hi-ot)+.05)}return mt.computeVertexNormals(),mt})(1400,1400);F=new $e(qe,new nn({map:ee,roughness:1,transparent:!0,opacity:.42,side:zt,depthWrite:!1,clippingPlanes:[a]})),F.renderOrder=2,n.add(F);let Me=new $e(qe,new wn({color:2503242,transparent:!0,opacity:.5,fog:!1,side:zt,depthWrite:!1,clippingPlanes:[o]}));Me.renderOrder=2,n.add(Me);let Fe=await new Promise(nt=>{let rt=new Image;rt.onload=()=>nt(rt),rt.src=ig}),De=new Ni(Fe);De.anisotropy=4;let Te=new Rn(890,918,100,100);Te.rotateX(-Math.PI/2);let We=Te.attributes.position,Ke=Te.attributes.uv;for(let nt=0;nt<We.count;nt++){let rt=We.getX(nt)+445,mt=459-We.getZ(nt);We.setX(nt,rt-ci),We.setZ(nt,hi-mt),We.setY(nt,ks(rt,mt)+.12)}Te.computeVertexNormals();let ft=new nn({map:De,transparent:!0,roughness:.95,side:zt,depthWrite:!1,clippingPlanes:[a],polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),et=new $e(Te,ft);et.renderOrder=3,n.add(et),_.push([ft,1]);let dt=new wn({map:De,color:2767452,transparent:!0,fog:!1,side:zt,depthWrite:!1,clippingPlanes:[o]}),pt=new $e(Te,dt);pt.renderOrder=3,n.add(pt),_.push([dt,1])}let P=ui.map($=>{let ne=g.getPointAt($[1]);return new N(ne.x,ks(ne.x+ci,hi-ne.z)+$[2],ne.z)}),D=new Ui(P,!1,"centripetal"),z=ui.map($=>$[0]);function J($){for(let ne=1;ne<z.length;ne++)if($<=z[ne])return(ne-1+($-z[ne-1])/(z[ne]-z[ne-1]))/(z.length-1);return 1}function I($,ne){for(let ee=1;ee<z.length;ee++)if($<=z[ee]){let _e=($-z[ee-1])/(z[ee]-z[ee-1]);return ui[ee-1][ne]+(ui[ee][ne]-ui[ee-1][ne])*_e}return ui[ui.length-1][ne]}let V=new N,H=new N,k=new N,ie=new N,W=new N(0,1,0),j=new N;function te(){let $=i.host.clientWidth||innerWidth,ne=i.host.clientHeight||innerHeight;t.setSize($,ne,!1),s.aspect=$/ne,s.fov=$/ne<1?75:55,s.updateProjectionMatrix()}te(),addEventListener("resize",te);let ye=!1,Ce=0,Z=Hi.smoothstep;function pe(){if(!ye)return;requestAnimationFrame(pe);let $=window.__P!=null?window.__P:i.progress();Ce+=($-Ce)*.08,window.__P!=null&&(Ce=$);let ne=Hi.clamp(Ce,0,.999);D.getPoint(J(ne),H);let ee=I(ne,1),_e=g.getPointAt(Math.min(1,ee+.07)),qe=ks(_e.x+ci,hi-_e.z),Me=ks(H.x+ci,hi-H.z),Fe=I(ne,3);V.set(_e.x,H.y*(1-Fe)+(qe+(H.y-Me<0?H.y-Me:0))*Fe,_e.z),Fe>.5&&V.set(_e.x,qe,_e.z);let De=Z(ne,.6,.72)*(1-Z(ne,.84,.95)),Te=A(sl[0],sl[1],sl[2]);if(V.lerp(Te,De),window.__CAM){let dt=window.__CAM;H.set(dt[0],dt[1],dt[2]),V.set(dt[3],dt[4],dt[5])}let We=Z(H.y-Me,-2.2,1.4);for(let dt of _)dt[0].opacity=.1+.9*We;F.material.opacity=.42*(.15+.85*We),H.y+=Math.sin(ne*9)*.12,s.position.copy(H),s.lookAt(V),s.updateMatrixWorld();let Ke=Math.min(1,1-Z(Ce,.2,.44)+Z(Ce,.9,1)),ft=(-1.2+2.4*Ke)*Math.tan(Hi.degToRad(s.fov/2))*s.aspect;s.getWorldDirection(k),ie.crossVectors(k,W).normalize();let et=ie.clone().addScaledVector(k,-ft).normalize();o.setFromNormalAndCoplanarPoint(et,H),a.setFromNormalAndCoplanarPoint(et.clone().negate(),H),i.onFrame&&i.onFrame(Ce,Ke),t.render(n,s)}return{stats:E,start(){ye||(ye=!0,requestAnimationFrame(pe))},stop(){ye=!1},renderOnce(){ye=!0,pe(),ye=!1}}}window.initHDY=ph;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
