      const burgers = [
        {nom : "Fish Burger",  prix : "3.00" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/468EF92F-58F1-4F20-A1BB-243CB327CA18_qoqyct.jpg '},
        {nom : "Beef Burger",  prix : "3.00" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/468EF92F-58F1-4F20-A1BB-243CB327CA18_qoqyct.jpg'},
        {nom : "Chesse Burger",  prix : "3.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/468EF92F-58F1-4F20-A1BB-243CB327CA18_qoqyct.jpg'},
        {nom : "Chicken Burger",  prix : "3.50" ,  pricemenu:  "5.50", picture :'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/468EF92F-58F1-4F20-A1BB-243CB327CA18_qoqyct.jpg' }, 
        {nom : "Double Cheese Burger",  prix : "4.50" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/468EF92F-58F1-4F20-A1BB-243CB327CA18_qoqyct.jpg'}, ]

        

        const galettes = [ 
        {nom : "Viande Hachée",  prix : "4.00" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654775300/ocroustycard/galettekebab_nxlx7o.jpg'},
        {nom : "Poulet Rôti",  prix : "4.00" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654775300/ocroustycard/galettekebab_nxlx7o.jpg'},
        {nom : "Kebab Poulet",  prix : "4.00" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654775300/ocroustycard/galettekebab_nxlx7o.jpg'} ,
        {nom : "Kefta",  prix : "4.00" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654775300/ocroustycard/galettekebab_nxlx7o.jpg'},
        {nom : "Tenders",  prix : "4.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654775300/ocroustycard/galettekebab_nxlx7o.jpg'},
        {nom : "Mixte",  prix : "4.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654775300/ocroustycard/galettekebab_nxlx7o.jpg'},
      ]

      const chickens = [
        {nom : "Nuggerts",  prix : "4.00" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654789968/ocroustycard/1BA314F1-4C8F-4823-AE9A-6F2A6172C488_c92qnp.jpg'},
        {nom : "Tenders",  prix : "7.00" ,  pricemenu:  "5.50" ,picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654789968/ocroustycard/1BA314F1-4C8F-4823-AE9A-6F2A6172C488_c92qnp.jpg'},
        {nom : "Wings",  prix : "6.00" ,  pricemenu:  "5.50", picture:'https://res.cloudinary.com/dsx6152nt/image/upload/v1654789967/ocroustycard/CB564665-BC1D-4F0B-9604-A94D26C52865_dum5vm.jpg'},
      ]

      const extra = [
        {nom : "Petite frite",  prix : "2.00" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654789969/ocroustycard/DE6F50D2-D551-4FE5-9F6F-9966942A6D9E_tchzq9.png' },
        {nom : "Grande frite",  prix : "2.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654789969/ocroustycard/DE6F50D2-D551-4FE5-9F6F-9966942A6D9E_tchzq9.png'},
        {nom : "Sauce supplémentaire",  prix : "0.30" ,},
        {nom : "Sauce Cheddar",  prix : "0.50" ,},
      ]

      const sandwich = [
        {nom : "Poulet Mayonaise",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Poulet Piquant",  prix : "2.50" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Poulet Curry",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Poulet Andalouse",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Poulet Brasil",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Poulet Marocain",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Thon Mayonaise",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Thon Piquant",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Filet Américain",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
      ]

      const sandwchaud =[
        {nom : "Mexicanos",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Fricadelle",  prix : "2.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Poulet Rôti",  prix : "3.50" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Viande Haché",  prix : "3.50" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Steack Haché",  prix : "3.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Cordon Bleu",  prix : "3.50" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Mergues",  prix : "4.00" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Dinde Marinée",  prix : "4.00" ,  pricemenu:  "5.50", picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
        {nom : "Kefta",  prix : "4.00" ,  pricemenu:  "5.50" , picture : 'https://res.cloudinary.com/dsx6152nt/image/upload/v1654819432/ocroustycard/56C9BD59-5855-4410-8B1D-EFDD06865DD0_d05tgy.png'},
      ]
      

  export {burgers, galettes, chickens, extra, sandwich, sandwchaud} 