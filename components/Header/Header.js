class Header {

    handleOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div>LOGO</div>
                <div class="header-counter" onclick="headerPage.handleOpenShoppingPage()">
                    🔥${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }

}

const headerPage = new Header();

