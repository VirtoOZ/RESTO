export default function ({ types: t }) {
	return {
		visitor: {
			JSXElement(path) {
				// Если это не <img>, выходим
				if (path.node.openingElement.name.name !== 'img') return;

				// Проверка: если родитель — picture, выходим
				if (t.isJSXElement(path.parent) && path.parent.openingElement.name.name === 'picture') {
					return;
				}

				const imgElem = path.node;
				const imgAttrs = imgElem.openingElement.attributes;

				// Находим src
				const srcAttr = imgAttrs.find(attr => attr.name && attr.name.name === 'src');
				if (!srcAttr || !srcAttr.value) return;

				let srcExpression;

				if (t.isJSXExpressionContainer(srcAttr.value)) {
					// <img src={photo} />
					srcExpression = srcAttr.value.expression;
				} else if (t.isStringLiteral(srcAttr.value)) {
					// <img src="photo.jpg" />
					srcExpression = t.stringLiteral(srcAttr.value.value);
				} else {
					return;
				}

				const srcWebp = t.jsxAttribute(
					t.jsxIdentifier('srcSet'),
					t.jsxExpressionContainer(
						t.callExpression(
							t.memberExpression(srcExpression, t.identifier('replace')),
							[
								t.regExpLiteral('\\.(png|jpe?g)$', 'i'),
								t.stringLiteral('.webp')
							]
						)
					)
				);

				const sourceElem = t.jsxElement(
					t.jsxOpeningElement(t.jsxIdentifier('source'), [
						srcWebp,
						t.jsxAttribute(t.jsxIdentifier('type'), t.stringLiteral('image/webp'))
					]),
					t.jsxClosingElement(t.jsxIdentifier('source')),
					[],
					true
				);

				const pictureElem = t.jsxElement(
					t.jsxOpeningElement(t.jsxIdentifier('picture'), []),
					t.jsxClosingElement(t.jsxIdentifier('picture')),
					[sourceElem, imgElem]
				);

				path.replaceWith(pictureElem);
			}
		}
	};
}