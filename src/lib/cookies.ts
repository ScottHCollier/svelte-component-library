export function readCookie(cname) {
	const name = cname + '=';
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

export function readObjectCookie(name) {
	let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	result && (result = JSON.parse(result[1]));
	return result;
}

export function setCookie(name, value, exDays) {
	const d = new Date();
	d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
	const expires = 'expires=' + d.toUTCString();
	let cookie;

	if (typeof value === 'object') {
		cookie = [name, '=', JSON.stringify(value), ';', expires, '; path=/;'].join('');
	} else {
		cookie = name + '=' + value + ';' + expires + ';path=/';
	}
	document.cookie = cookie;
}

export function deleteCookie(name) {
	document.cookie = [
		name,
		'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.',
		window.location.host.toString()
	].join('');
}
