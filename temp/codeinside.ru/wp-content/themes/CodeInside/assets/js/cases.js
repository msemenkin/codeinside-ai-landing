document.addEventListener('DOMContentLoaded', () => {
		var paginat = document.querySelector(".iiaa");
		const btns = document.querySelectorAll('.tab-btn');
		document.querySelector('.net').addEventListener("click", function(e) {
			e.preventDefault()
			btns.forEach(u => {
				u.classList.remove('active')
			})
			
			document.querySelector('.net').classList.add('active');
			let urlNull = window.location.href.split("?");
			window.location = urlNull[0];


		});
		btns.forEach(thisElement => {
			thisElement.addEventListener('click', e => {
				e.preventDefault();
				var target = thisElement;
				document.querySelectorAll(`.tab-item`).forEach((s) => {
				s.classList.add("hidden");
				});
				document.querySelectorAll(`.tab-item2`).forEach((s) => {
				s.classList.remove("new-cards-hidden");
				});
				if (paginat) {
					paginat.classList.add('hidden')
				}
				// если при нажатии кнопка уже эктив
				if (thisElement.classList.contains('active')) {
					thisElement.classList.remove('active');
					
					// если нет актив вообще то показываем все
					if (document.querySelectorAll('.tab-btn.active').length == 0) {
						document.querySelectorAll(`.tab-item2`).forEach((s) => {
						s.classList.remove("hidden");
						});
						// очистка меток
						console.log(thisElement);
						window.location = window.location.href.split("?")[0];
					} else {
						let del = window.location.href;
						let tempy1 = `&${thisElement.id}`;
						let tempy2 = `?${thisElement.id}&`;
						if (del.match(tempy1)) {
							var newDel = del.replace(tempy1, '');
							window.location = newDel;
						} else {
							var newDel = del.replace(tempy2, '?');
							window.location = newDel;
						}
					}
					// если есть то скрываем все с айди элмента который отжали
					document.querySelectorAll(`.${thisElement.id}`).forEach(s => {
						s.classList.add('hidden')
					})
					// восстанавливаем активных
					let temp = document.querySelectorAll('.tab-btn.active');
					// находим все отжатые кнопки
					let cas = document.querySelectorAll(".tab-item2");
					// скрываем все кейсы пока что

					// массив всех id активных кнопок
					let ids = []
					for (i = 0; i < temp.length; i++) {
						if (temp[i].id) {
							ids.push(temp[i].id);
						}
					}
					// проходимся по всем элементам и скрываем лишь те кто не попал под массив

					cas.forEach(elmm => {
						for (indexx = 0; indexx < ids.length; indexx++) {
							if (elmm.classList.contains(`${ids[indexx]}`)) {
								elmm.classList.remove("hidden");

							} else {
								elmm.classList.add("hidden");
							}
						}
					})

					// если не эктив
				} else {
					thisElement.classList.add('active');
					let net = document.querySelector('.net');
					net.classList.remove('active');
					// находим все отжатые кнопки
					let temp = document.querySelectorAll('.tab-btn.active');
					let cas = document.querySelectorAll('.tab-item2');
					// скрываем все кейсы пока что
					cas.forEach(o => {
						o.classList.add('hidden');
					})
					// массив всех id активных кнопок
					let ids = []
					for (i = 0; i < temp.length; i++) {
						if (temp[i].id) {
							ids.push(temp[i].id);
						}
					}
					// добавляем в урл
					var url0 = window.location.href.split("#").pop();
					// проверяем нет ли в ютм уже меток
					if (url0) {
						// let metka = url0.split('&');
						console.log(url0);
						if (url0) {
							let star = window.location.href;
							let stsr = star.replace(`#${url0}`, '');
							if (stsr === star) {

							} else {
								window.location = stsr
							}
						}
					}


					for (i = 0; i < ids.length; i++) {
						let url = window.location.href.split("?");
						// проверка
						let urlM = window.location.href;

						let intersect = function(ids, url0) {
							return ids.filter(function(n) {
								return url0.indexOf(n) !== -1;
							});
						};

						let sovpadenie = intersect(ids, url0);
						if (ids[i] == sovpadenie[i]) {
							console.log('ok')
						} else {

							let znak = window.location.href;
							if (znak == url[0]) {
								var uri = `${url}?${ids[i]}`
							} else {
								var uri = `${urlM}&${target.id}`
							}
							window.location = uri;

						}
					}


					// проходимся по всем элементам и скрываем лишь те кто не попал под массив
					console.log(ids);
					cas.forEach(elmm => {
						for (indexx = 0; indexx < ids.length; indexx++) {
							if (elmm.classList.contains(`${ids[indexx]}`)) {
								elmm.classList.remove('hidden');
							}
						}
					})
				}
			})
		})

	})
	window
		.addEventListener(
			'load',
			ready)

	function ready(params) {
		let url0 = window.location.href.split("?").pop();

		if (url0) {
			let metka = url0.split('&')
			console.log(metka);
			metka.forEach(btn => {
				document.querySelectorAll('.tab-btn').forEach(element => {
					if (element.id == btn) {
						element.click()
					}
				});
			})
		}
	}
	document.addEventListener("DOMContentLoaded", a => {
		const numberPage = 2;
		const all1 = document.querySelector('.numberR').querySelectorAll('li');
		const all2 = document.querySelector('.numberR2').querySelectorAll('li');
		const all3 = document.querySelector('.numberR3').querySelectorAll('li');
		for (let index = 0; index < all3.length; index++) {
			const element = all3[index];
			element.querySelector('A').classList.remove('active')
		}
		all3[numberPage].querySelector('A').classList.add('active');
		if (all1) {

			for (let index = 0; index < all1.length; index++) {
				const element = all1[index];
				element.querySelector('A').classList.remove('active')
			}
			for (let index = 0; index < all2.length; index++) {
				const element = all2[index];
				element.querySelector('A').classList.remove('active')
			}
			all1[numberPage].querySelector('A').classList.add('active');
			all2[numberPage].querySelector('A').classList.add('active');
		}
	});