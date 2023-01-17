/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var books = [
	{name: "Engenharia de Software", price: 39.5},
	{name: "HTML 5 & CSS 3", price: 18},
	{name: "Introdução ao MongoDB", price: 25},
	{name: "MySQL 8", price: 40},
	{name: "PHP 7", price: 25},
	{name: "PostgreSQL", price: 59},
	{name: "PostgreSQL", price: 59},
	{name: "Design de Interfaces", price: 74.9},
	{name: "O guia para projetar UX", price: 99.9},
]

var cart = []



$("#closeCart").click(function () {
	alertify.confirm("Lojinha do Grupo 1", "Finalizar o carrinho?", function () {
		cart = []
		updateCart()

		$(".inCart").removeClass("inCart")

		$(".livro").html("Adicionar ao carrinho")

		alertify.success("Carrinho finalizado")
	}, function () {
		alertify.error("Cancelado")
	})

})
$(".livro").click(function(){
	let element = $(this)
	let book_index = $(this).attr("book-index")

	if(element.hasClass('inCart')) {
		element.find('.btn-book__text').html( "Adicionar ao carrinho")
		cart.splice(cart.findIndex(v => v.name === books[book_index].name), 1)
		alertify.error("Produto removido")

	} else {
		element.find('.btn-book__text').html( "Remover do carrinho")
		cart.push(books[book_index])
		alertify.success("Produto adicionado")
	}

	element.toggleClass('inCart')

	element.toggleClass('btn-success btn-danger')
	element.find('.bi').toggleClass('bi-bag-plus bi-bag-x')

	updateCart()

	element.blur()
})

function updateCart(){
	$(".cart-item").remove()

	let total = 0

	if (cart.length === 0){
		$("#cart")
			.prepend("<li class=\"cart-item\"><div class=\"dropdown-item\">*Sem itens</div></li>")
	} else {
		cart.forEach(item => {
			total += item.price
			$("#cart")
				.prepend(`<li class="cart-item"><div class="dropdown-item">${item.name}</div></li>`)
		})
	}

	total = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

	$("#total").html(total)

	$("#itemsInCart").html(cart.length)
}

