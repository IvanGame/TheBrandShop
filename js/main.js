let header__burger=document.querySelector(".header__burger"),header__button=document.querySelector(".header__button"),header_menu=document.querySelector(".header__menu"),back=document.querySelector("body"),header__list=document.querySelector(".header__list");header__burger.onclick=function(){header__burger.classList.toggle("active"),header__button.classList.toggle("active"),header_menu.classList.toggle("active"),back.classList.toggle("lock")};let select=document.querySelector(".header__select"),submenu=document.querySelector(".submenu"),arrow=document.querySelector(".arrow");select.onclick=function(){submenu.classList.toggle("open"),arrow.classList.toggle("active")};let cart=document.querySelector(".cart"),cartWindow=document.querySelector(".cart__window");cart.onclick=function(){cartWindow.classList.toggle("open")};let select2=document.querySelector(".header__select-2"),submenu2=document.querySelector(".submenu-2"),arrow2=document.querySelector(".arrow-2");select2.onclick=function(){submenu2.classList.toggle("open"),arrow2.classList.toggle("active")},$(document).ready((function(){$(".slider").slick({arrows:!0,slidesToShow:1,centerMode:!0})}));class ItcAccordion{constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e;this._config=Object.assign({alwaysOpen:!0,duration:350},t),this.addEventListener()}addEventListener(){this._el.addEventListener("click",(e=>{const t=e.target.closest(".accordion__header");if(t){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item_show");e&&e!==t.parentElement&&this.toggle(e)}this.toggle(t.parentElement)}}))}show(e){const t=e.querySelector(".accordion__body");if(t.classList.contains("collapsing")||e.classList.contains("accordion__item_show"))return;t.style.display="block";const o=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.add("collapsing"),e.classList.add("accordion__item_slidedown"),t.offsetHeight,t.style.height=`${o}px`,window.setTimeout((()=>{t.classList.remove("collapsing"),e.classList.remove("accordion__item_slidedown"),t.classList.add("collapse"),e.classList.add("accordion__item_show"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration)}hide(e){const t=e.querySelector(".accordion__body");!t.classList.contains("collapsing")&&e.classList.contains("accordion__item_show")&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.remove("collapse"),e.classList.remove("accordion__item_show"),t.classList.add("collapsing"),window.setTimeout((()=>{t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration))}toggle(e){e.classList.contains("accordion__item_show")?this.hide(e):this.show(e)}}new ItcAccordion(document.querySelector(".accordion"),{alwaysOpen:!1}),$(".polzunok-5").slider({min:52,max:400,values:[100,300],range:!0,animate:"fast",slide:function(e,t){$(".polzunok-input-5-left").val(t.values[0]),$(".polzunok-input-5-right").val(t.values[1])}}),$(".polzunok-input-5-left").val($(".polzunok-5").slider("values",0)),$(".polzunok-input-5-right").val($(".polzunok-5").slider("values",1)),$(".polzunok-container-5 input").change((function(){var e=$(".polzunok-input-5-left").val().replace(/[^0-9]/g,""),t=$(".polzunok-5").slider("option","min"),o=$(".polzunok-5").slider("values",1),s=$(".polzunok-input-5-right").val().replace(/[^0-9]/g,""),l=$(".polzunok-5").slider("option","max"),c=$(".polzunok-5").slider("values",0);e>o&&(e=o),e<t&&(e=t),""==e&&(e=0),s<c&&(s=c),s>l&&(s=l),""==s&&(s=0),$(".polzunok-input-5-left").val(e),$(".polzunok-input-5-right").val(s),e!=c&&$(".polzunok-5").slider("values",0,e),s!=o&&$(".polzunok-5").slider("values",1,s)}));let select3=document.querySelector(".filter2__select-1"),submenu3=document.querySelector(".filter2__submenu1"),arrow3=document.querySelector(".arrow-3");select3.onclick=function(){submenu3.classList.toggle("open"),arrow3.classList.toggle("active")};let select4=document.querySelector(".filter2__select-2"),submenu4=document.querySelector(".filter2__submenu2"),arrow4=document.querySelector(".arrow-4");select4.onclick=function(){submenu4.classList.toggle("open"),arrow4.classList.toggle("active")};let select5=document.querySelector(".cards__select-1"),submenu5=document.querySelector(".cards__submenu1"),arrow5=document.querySelector(".arrow-5");select5.onclick=function(){submenu5.classList.toggle("open"),arrow5.classList.toggle("active")};