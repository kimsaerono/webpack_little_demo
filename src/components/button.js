import $ from 'jquery';
import template from './button.html';
import mustache from 'mustache';
import './button.scss'

export default class button {
	constructor(link){
		this.link = link;
	}
	onClick(event){
		event.preventDefault();
		alert(this.link);
	}
	render(node){
		const text = $(node).text();
		//render our button
		$(node).html(mustache.render(template,{text}));
		//attach our listeners
		$('.button').click(this.onClick.bind(this));
	}
}