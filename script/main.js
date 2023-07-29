const portoCard = [{
  img: '',
  title: 'Porto 1',
  desc: 'Porto 1 desc'
    }, {
  img: '',
  title: 'Porto 2',
  desc: 'Porto 2 desc'
    }, {
  img: '',
  title: 'Porto 3',
  desc: 'Porto 3 desc'
    }]

let generateHtml = ''

portoCard.forEach((value) => {
  const title = value.title
  const desc = value.desc

  let html = `
      <div class="portofolio-card">
          <div class="portofolio-img"></div>
          <div class="portofolio-desc">
            <h4>${title}</h4>
            <p>${desc}</p>
            <button class="portofolio-button">See Detail</button>
          </div>
      </div>`

  generateHtml += html
})

document.querySelector('.card-container').innerHTML = generateHtml