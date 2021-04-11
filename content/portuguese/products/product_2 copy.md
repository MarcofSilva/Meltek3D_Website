---
title : "Caixa 3 cápsulas"
date  : 2021-02-24T22:33:44Z
# meta description
description : "this is meta description"

weight: 2

images: 
- "images/products/capsules_3_red.png"
- "images/products/capsules_3_blue.png"

#XXX when creating product, give this files a name considering that it will be shown in the url

############################# banner ############################
banner:
  enable : true
  title  : "Acredita na Tecnologia , Faz a mudança"
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, modi fugit in veritatis labore perferendis. Minima hic at, nostrum nihil!"
  image : "images/showcase/showcase-2.jpeg"
  button:
   enable: false
   label : "Ver todos os Produtos"
   link  : "products"

############################# allery Info ############################
gallery_buy:
  enable: true
  title: ""
  # product Price
  price         : "5.00"
  discount_price: "4.50"

  # product variation
  colors: ["Azul","Vermelho","Branco"]
  sizes : [3, 6]
  size : 3
  
  description: Faça as suas cápsulas de forma rápida e limpa. Consiga ainda armazenar as cápsulas dps de fechadas com esta caixa que inclui uma tampa para facilitar o transporte e armazenamento.

############################# Feature ############################
features:
  enable: true
  #title : "" # Write in here will override the title defined for all products
  items :
    # about product item loop
    - image  : "images/showcase/showcase-1.jpeg"
      title  : "Menos Esforço"
      content: "Prepare as suas cápsulas com menos esforço, fixando cada uma delas numa das cavidades em vez de a segurar com a mão."
      button:
        enable: false
        label : "Check Features"
        link  : "#"
        
    # about product item loop
    - image  : "images/showcase/showcase-2.jpeg"
      title  : "Ajude o Ambiente"
      content: "Recorremos a um material biodegradável para a produção, reduzindo o impacto negativo no ambiente."
      button:
        enable: false
        label : "Check Features"
        link  : "#"

    # about product item loop
    - image  : "images/showcase/showcase-3.jpeg"
      title  : "Poupe Tempo"
      content: "5x mais rápido prepara múltiplas cápsulas."
      button:
        enable: false
        label : "Check Features"
        link  : "#"
        
    # about product item loop
    - image  : "images/showcase/showcase-1.jpeg"
      title  : "Armazenamento e transporte"
      content: "Guarde várias cápsulas de forma segura, nesta nossa caixa desenhada à medida."
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

draft: false
---