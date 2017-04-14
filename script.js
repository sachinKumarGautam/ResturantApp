function removeCurrentMenu() {
	$('#menu').children().detach();
}

function displayCurrentMenu(page) {
	var menu = $('#menu')
	menu.append("<h2>" + page.headline + "</h2>");
	var itemContainer;
	var menuItem;

	for(var i = 0; i < page.contents.length; i++) {
		menu.append("<div id=item" + i + " class='item'></div>");
		itemContainer = $('#item' + i)
		menuItem = page.contents[i]

		itemContainer.append('<img src=' + menuItem.imageURL + '>')
		itemContainer.append('<h3>' + menuItem.name + '</h3>');
		itemContainer.append('<p>' + menuItem.description + '</p>');
		itemContainer.append('<p>' + menuItem.price + '</p>');
		itemContainer.append("<div class='clearfix'></div>")
	}
}

function updateMenu(page) {
	removeCurrentMenu();
	displayCurrentMenu(page);
}

var pages = [{
	title: 'Specials',
	headline: "Today's Specials",
	contents: [{
		name: 'Cookie',
		description: 'Delicious chocolate chips',
		price: '$2',
		imageURL: 'assets/chocolate_chip.png'
		}, {
		name: 'Roll',
		description: 'Cream-filled and tasty - comes in pumpkin, orange or cinnamon',
		price: '$4',
		imageURL: 'assets/cinnamon.png'}
	]}, {
	title: 'Cookies',
	headline: 'Cookies',
	contents: [{
		name: 'Chocolate Chip',
		description: 'Delicious chocolate chips',
		price: '$2',
		imageURL: 'assets/chocolate_chip.png'
		}, {
		name: 'Oatmeal Raisin',
		description: 'Oatmeal-y, Rasin-y, Delicious-y',
		price: '$3',
		imageURL: 'assets/oatmeal_raisin.png'}
	]}, {
	title: 'Cupcakes',
	headline: 'Cupcakes',
	contents: [{
		name: 'Margarita',
		description: 'I like tequila.... a lot',
		price: '$3',
		imageURL: 'assets/margarita.png'
		}, {
		name: 'Funfetti',
		description: 'Fun + Confetti = Funfetti',
		price: '$2',
		imageURL: 'assets/funfetti.png'}
	]}, {
	title: 'Candies',
	headline: 'Candies',
	contents: [{
		name: 'Cake Balls',
		description: 'Never salty, but definitely chocolate',
		price: '$1',
		imageURL: 'assets/cake_balls.png'
		}, {
		name: 'Peanut Butter Balls',
		description: 'Chocolate AND salty... and crunchy?',
		price: '$1',
		imageURL: 'assets/pb_balls.png'}
	]}];

$(document).ready(function() {
	$('#content').append("<h1>Mamma's Kitchen</h1>");
	$('#content').append("<div class='container'></div>");

	$('#content').append("<ul></ul>");

	for(var i = 0; i < pages.length; i += 1) {
		var title = pages[i].title;
		var page = pages[i];
		$('ul').append("<li id=" + title + ">" + title + "</li>");
	}

	// pages indexes refer to 'database' ids
	$('#Specials').on('click', function() {
		updateMenu(pages[0]);
	})
	$('#Cookies').on('click', function() {
		updateMenu(pages[1]);
	})
	$('#Cupcakes').on('click', function() {
		updateMenu(pages[2]);
	})
	$('#Candies').on('click', function() {
		updateMenu(pages[3]);
	})

	$('#content').append("<div class='clearfix'></div>");
	$('#content').append("<div id='menu'></div>");

	// Display Specials page on page load
	displayCurrentMenu(pages[0]);
});
