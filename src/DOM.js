export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

export function generateTree(childrenCount, level) {
    const createNode = (currentLevel) => {
        const element = document.createElement('div');
        element.classList.add(`item_${currentLevel}`);

        if (currentLevel < level) {
            for (let i = 0; i < childrenCount; i++) {
                element.appendChild(createNode(currentLevel + 1));
            }
        }

        return element;
    };

    return createNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = tree.querySelectorAll('.item_2');

    nodes.forEach((node) => {
        const section = document.createElement('section');
        section.className = node.className;

        while (node.firstChild) {
            section.appendChild(node.firstChild);
        }

        node.replaceWith(section);
    });

    return tree;
}
