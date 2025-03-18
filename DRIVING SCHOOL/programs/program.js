const programsMenu = document.querySelectorAll('.program')
const programDetail = document.querySelector('.programDetail')

const removeActiveClass = () => {
    programsMenu.forEach(button => {
        button.classList.remove('active')
    })
}

programsMenu.forEach(program => {
    program.addEventListener('click', () => {
        removeActiveClass()
        if (program.classList.contains('express')) {
            program.classList.add('active')
            programDetail.innerHTML = `
            <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Express Lessons</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque. Esse excepturi quia ullam provident, eum animi nihil enim mollitia dolorem a tenetur hic officiis similique eveniet ex, consequatur corporis.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/candidate3.jpg" alt=""></div>
                    <div><img src="../assets/practical8.jpg" alt=""></div>
                </div>
                <h4>Included in weekday streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                
                <h4>Included in weekend streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started now!</a>
            </div>
            <div class="programDetail__right">
                <article>
                    <h4>Express Without License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Standard License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Premium License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>`
        } else if (program.classList.contains('polishing')) {
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Polishing Package</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque. Esse excepturi quia ullam provident, eum animi nihil enim mollitia dolorem a tenetur hic officiis similique eveniet ex, consequatur corporis.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/candidate3.jpg" alt=""></div>
                    <div><img src="../assets/practical8.jpg" alt=""></div>
                </div>
                <h4>Included in weekday streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                
                <h4>Included in weekend streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started now!</a>
            </div>
            <div class="programDetail__right">
                <article>
                    <h4>Express Without License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Standard License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Premium License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>`
        } else if (program.classList.contains('license')) {
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Regular Learning</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque. Esse excepturi quia ullam provident, eum animi nihil enim mollitia dolorem a tenetur hic officiis similique eveniet ex, consequatur corporis.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/candidate3.jpg" alt=""></div>
                    <div><img src="../assets/practical8.jpg" alt=""></div>
                </div>
                <h4>Included in weekday streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                
                <h4>Included in weekend streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started now!</a>
            </div>
            <div class="programDetail__right">
                <article>
                    <h4>Express Without License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Standard License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Premium License</h4>
                    <div>
                        <h2>$2,424</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,124</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>`
        } else if (program.classList.contains('regular')) {
            program.classList.add('active')
            programDetail.innerHTML = `   
        <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Regular Learning</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque. Esse excepturi quia ullam provident, eum animi nihil enim mollitia dolorem a tenetur hic officiis similique eveniet ex, consequatur corporis.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/candidate3.jpg" alt=""></div>
                    <div><img src="../assets/practical8.jpg" alt=""></div>
                </div>
                <h4>Included in weekday streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                
                <h4>Included in weekend streams</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam dolorem quisquam aliquid incidunt quis dignissimos.</p>
                <article>
                    <h5>Theory lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <article>
                    <h5>Practical lessons</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde blanditiis accusantium possimus magnam sunt esse voluptates maxime vel. Odio velit consequuntur dolore, praesentium sit ipsam. Modi maiores odit voluptas?</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started now!</a>
            </div>
            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>$1,990</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$1,840</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>$2,650</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,500</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>$2,900</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>$2,750</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>`
        }
    })
});