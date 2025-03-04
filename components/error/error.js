class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-massage">
                    <h3>Ошибка, нет доступа</h3>
                    <p>Ппробуйте зайти позже</p>
                </div>
            </div>
            `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();