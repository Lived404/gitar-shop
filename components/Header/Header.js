class Header {

    render() {
        const html = `
            <div class="header-container">
                <div class="header-counter">
                    🔥
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }

}

const headerPage = new Header();
headerPage.render();