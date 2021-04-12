---
title : "Caixa 6 cápsulas"
date  : 2021-02-24T22:32:39Z
# meta description
description : "this is meta description"

weight: 1

images: 
- "images/products/capsules_6_blue.png"
- "images/products/capsules_6_red.png"

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

############################# Gallery Info ############################
gallery_buy:
  enable: true
  title: ""
  # product Price
  price         : "6.00"
  discount_price: "5.50"

  # product variation
  colors: ["Azul","Vermelho","Branco"]
  sizes : [3, 6]
  size : 6
  
  description: Faça as suas cápsulas de forma rápida e limpa. Consiga ainda armazenar as cápsulas dps de fechadas com esta caixa que inclui uma tampa para facilitar o transporte e armazenamento.

############################# Feature ############################
features:
  enable: true
  #title : "" # Write in here will override the title defined for all products
  first_item:
    # about product item loop
    image1  : "images/products/feature1_1.png"
    image2  : "images/products/feature1_2.png"
    title  : "Menos Esforço"
    content: "Prepare as suas cápsulas com menos esforço, fixando cada uma delas numa das cavidades em vez de a segurar com a mão."
    button:
      enable: false
      label : "Check Features"
      link  : "#"
  items :        
    # about product item loop
    - image  : "images/products/feature2.png"
      title  : "Ajude o Ambiente"
      content: "Recorremos a um material biodegradável para a produção, reduzindo o impacto negativo no ambiente."
      button:
        enable: false
        label : "Check Features"
        link  : "#"

    # about product item loop
    - image  : "images/products/feature3.png"
      title  : "Poupe Tempo"
      content: "5x mais rápido prepara múltiplas cápsulas."
      button:
        enable: false
        label : "Check Features"
        link  : "#"
        
    # about product item loop
    - image  : "images/products/feature4_1.png"
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