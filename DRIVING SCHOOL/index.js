
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        599: {
            slidesPerView: 3
        }
    }
});





const packagesButtons = document.querySelectorAll('.packages__buttons button')
const packagesTableBody = document.querySelector('.packages tbody')

const removeActiveClassFrombuttons = () => {
    packagesButtons.forEach(button => {
        button.classList.remove('active')
    });
}

packagesButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClassFrombuttons()
        if (button.classList.contains('students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                    <tr>
                        <td>Regular without license</td>
                        <td>6 weeks</td>
                        <td>1,840/td>
                    </tr>
                    <tr>
                        <td>Regular with standard license</td>
                        <td>6 weeks</td>
                        <td>2,500</td>
                    </tr>
                    <tr>
                        <td>Regular with premium license</td>
                        <td>6 weeks</td>
                        <td>2,750</td>
                    </tr>
                    <tr>
                        <td>Express without license</td>
                        <td>3 weeks</td>
                        <td>2,250</td>
                    </tr>
                    <tr>
                        <td>Express with standard license</td>
                        <td>3 weeks</td>
                        <td>2,910</td>
                    </tr>
                    <tr>
                        <td>Express with premium license</td>
                        <td>3 weeks</td>
                        <td>3,160</td>
                    </tr>
                    <tr>
                        <td>Polishing without license</td>
                        <td>2 - 4 weeks</td>
                        <td>1,350</td>
                    </tr>
                    <tr>
                        <td>Polishing with standard license</td>
                        <td>2 - 4 weeks</td>
                        <td>2,010</td>
                    </tr>
                    <tr>
                        <td>Polishing with premium license</td>
                        <td>2 - 4 weeks</td>
                        <td>2,060</td>
                    </tr>`
        } else if (button.classList.contains('license')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                    <tr>
                        <td>Regular</td>
                        <td>3 months</td>
                        <td>1,650</td>
                    </tr>
                    <tr>
                        <td>Express</td>
                        <td>3 - 4 weeks</td>
                        <td>1,900</td>
                    </tr>`
        } else if (button.classList.contains('non-students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                    <tr>
                        <td>Regular with standard license</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with premium license</td>
                        <td>6 weeks</td>
                        <td>2,900</td>
                    </tr>
                    <tr>
                        <td>Express without license</td>
                        <td>3 weeks</td>
                        <td>2,400</td>
                    </tr>
                    <tr>
                        <td>Express with standard license</td>
                        <td>3 weeks</td>
                        <td>3,060</td>
                    </tr>
                    <tr>
                        <td>Express with premium license</td>
                        <td>3 weeks</td>
                        <td>3,310</td>
                    </tr>
                    <tr>
                        <td>Polishing without license</td>
                        <td>2 - 4 weeks</td>
                        <td>1,500</td>
                    </tr>
                    <tr>
                        <td>Polishing with standard license</td>
                        <td>2 - 4 weeks</td>
                        <td>2,160</td>
                    </tr>
                    <tr>
                        <td>Polishing with premium license</td>
                        <td>2 - 4 weeks</td>
                        <td>2,140</td>
                    </tr>`
        }
    })
})