const options = [
    { title: "Ofertas de la semana!", linkTo: "#" },
    { title: "Productos", linkTo: "#" },
    { title: "Contacto", linkTo: "#" },
    { title: "Marcas", linkTo: "#" }
];

const navbarSelector = document.querySelector("#nav ul");

for (let option of options) {
    const anchor = document.createElement("a");
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    
    const listItem = document.createElement("li");
    listItem.appendChild(anchor);
    
    navbarSelector.appendChild(listItem);
}




















document.addEventListener("DOMContentLoaded", function() {
    const footerSelector = document.getElementById("footer");
    
    if (footerSelector) {
        const options = [
            { title: "Ofertas de la semana!", linkTo: "#" , opts: ["Laptops", "Audio", "Auriculares"] },
            { title: "Cómo comprar", linkTo: "#", opts: ["Formas de pago", "Envios", "Devoluciones"] },
            { title: "Costos y tarifas", linkTo: "#", opts: ["Impuestos", "Facturación"] },
            { title: "Mis pedidos", linkTo: "#", opts: ["Pedir nuevamente", "Lista de deseos"] },
            { title: "Garantía de entrega", linkTo: "#", opts: [] }
        ];
        
        for (const { title, linkTo, opts } of options) {
            const column = document.createElement("div");
            column.classList.add("column");
        
            const columnTitle = document.createElement("h3");
            const titleLink = document.createElement("a");
            titleLink.textContent = title;
            titleLink.href = linkTo;
            columnTitle.appendChild(titleLink);
            column.appendChild(columnTitle);
        
            const optionsList = document.createElement("ul");
            for (const option of opts) {
                const optionItem = document.createElement("li");
                optionItem.textContent = option;
                optionsList.appendChild(optionItem);
            }
            column.appendChild(optionsList);
        
            footerSelector.appendChild(column);
        }
    }
});


