const btn = document.querySelector(".menu_on");
const menuMobile = document.querySelector(".menu_mobile");

btn_on.addEventListener("click", () => {

	btn_on.ClassList.toggle("active");
	menu_mobile.ClassList.toggle("active");
})