function figure(imgSrc, caption, runeType, translation, comment, width)
{
	document.write('<figure class="center">');
	document.write('<img src="');
	document.write(imgSrc);
	document.write('"');
	if (width != null)
	{
		document.write(' width="');
		document.write(width);
		document.write('"');
	}
	document.write('"></img>');
	document.write('<figcaption>');
	document.write(caption);
	document.write('</figcaption>');
	document.write('</figure>');
	document.write('Rune Type: ');
	document.write(runeType);
	document.write('<br/>');
	if (translation != null)
	{
		document.write('Translation: ');
		document.write(translation);
		document.write('<br/>');
	}
	if (comment != null)
	{
		document.write(comment);
		document.write('<br/>');
	}
}
