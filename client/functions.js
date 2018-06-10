const getInitials = (string) => {
	if (!string) {
		return '-';
	}

  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();
  
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

const removeSpace = (str) => {
	str = str.replace(/\s+/g, '');
	return str;
};

export { getInitials, removeSpace };