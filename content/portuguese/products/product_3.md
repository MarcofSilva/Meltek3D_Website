---
title: "Caixa para 3 frascos"
date: 2021-07-07T19:05:27+01:00
draft: false


# meta description
description : "this is meta description"

weight: 3

images: 
- "images/products/3bottles_black_1.png"
- "images/products/3bottles_black_3.png"
- "images/products/3bottles_black_5.png"
- "images/products/3bottles_black_6.png"
- "images/products/3bottles_black_7.png"

#XXX when creating product, give this files a name considering that it will be shown in the url

############################# banner ############################
banner:
  enable : false
  title  : "Acredita na Tecnologia , Faz a mudança"
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, modi fugit in veritatis labore perferendis. Minima hic at, nostrum nihil!"
  image : "images/showcase/showcase-2.jpeg"
  button:
   enable: false
   label : "Ver todos os Produtos"
   link  : "products"

############################# Gallery Info ############################
gallery_buy:
  enable: true
  title: ""
  # product Price
  price             : "15.5"
  price_personalized: "16.5"
  discount_price    : ""

  # product variation
  colors: ["Preto"]
  sizes : [3]
  other_sizes:
  size : 3
  
  info:
      description: "Caixa suporte para frascos de 15ml."
      material: "PLA (Poliácido láctico) - plástico biodegradável e biocompatível."
      dimensions: "11x8x7cm (comprimento, largura, altura)"
      extras: "Acresce o valor dos portes."

############################# Feature ############################
features:
  enable: false
  #title : "" # Write in here will override the title defined for all products
  first_item:
    # about product item loop
    image1  : "images/products/feature1_1.jpg"
    image2  : "images/products/feature1_2.jpg"
    title  : "Menos Esforço"
    content: "Prepare as suas misturas de óleos essenciais em cápsulas, com menos esforço."
    button:
      enable: false
      label : "Check Features"
      link  : "#"
  items :        
    # about product item loop
    - image  : "images/products/feature2.jpg"
      title  : "Ajude o Ambiente"
      content: "Recorremos a PLA, um material plástico biocompatível e biodegradável, reduzindo o impacto negativo no ambiente."
      button:
        enable: false
        label : "Check Features"
        link  : "#"

    # about product item loop
    - image  : "images/products/feature3.jpg"
      title  : "Poupe Tempo"
      content: "Poupe tempo ao preparar múltiplas doses até 5x mais rápido que convencionalmente."
      button:
        enable: false
        label : "Check Features"
        link  : "#"
        
    # about product item loop
    - image  : "images/products/feature4.jpg"
      title  : "Armazene e Transporte"
      content: "Armazene e transporte as suas cápsulas de forma segura e eficiente."
      button:
        enable: false
        label : "Check Features"
        link  : "#"


############################## Testimonial ##########################
testimonials:
  enable: false
  title : "O que andam a dizer"
  testimonial_item:
    # testimonial item loop
    - name       : "Jonathon Andrew"
      designation: "CEO, Themefisher"
      image      : "images/avater.png"
      content    : "Melhor compra da minha vida, nunca me vou arrepender, e acho que vou comprar mais destas caixas. São muito girss, recomendo!"
      
    # testimonial item loop
    - name       : "Jonathon Andrew"
      designation: "Alguém"
      image      : "images/avater.png"
      content    : "Não sei viver sem esta caixa."
      
    # testimonial item loop
    - name       : "Jonathon Andrew"
      designation: "Pessoa"
      image      : "images/avater.png"
      content    : "Lindo, mesmo."

############################## Other Products ##########################
other_products:
  enable: true
  #title and common variables are in data/product.yml but can be overriden here (by product)

promo:
  enable: false
---