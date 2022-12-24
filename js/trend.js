

    let trend_list = ['50% off sidewide on Myntra','50% + 25% offcode on Khadi Essentials',
    'Sitewide sale, flat 20% off + 20% off code', 'Espresso body wash by myCaffeine',
    '10% off sitewide on H&M'];
    
    let combine = trend_list.map(function (x,i) {
        return `<li>
          <div class="side_one side${i}">
            <span class="side_name">${x}</span>
          </div>
        </li>`    
    });
    
    document.getElementById('trend_view').innerHTML=combine.join('');

    // Coupons
    let coupon_head = [
        {
            "id" : 1,
            "offers" : "coupon",
            "coupons" : "30",
            "color" : "8a54e7"
        },
        {
            "id" : 2,
            "offers" : "coupon",
            "coupons" : "10",
            "color" : "47dbba"
        },
        {
            "id" : 3,
            "offers" : "coupon",
            "coupons" : "5",
            "color" : "71d2ef"
        }
    ];

    let show_coupon = coupon_head.map(function(coupon,c) {

        return `<div class="coupon_one">
          <div class="coupon_per">
          <img src="asset/coupons/${coupon.offers}${c}.svg" class="coupon_pic" alt="Kaashkaro" />
          </div>
          <div class="coupon_list" style="border: 1.5px solid #${coupon.color}">
            <p class="coupons" style="color: #${coupon.color};">${coupon.coupons} Coupons</p>
          </div>
        </div>`  
    })
    
    document.getElementById('coupon_show').innerHTML=show_coupon.join('');

    //mobile

    let mobile_head = [
        {
            "id" : 1,
            "mob_img": "m_1",
            "mobile_head" : "Apple iPhone 13",
            "cash" : "8% Cashback"
        },
        {
            "id" : 2,
            "mob_img": "m_2",
            "mobile_head" : "OPPO F17",
            "cash" : "12% Cashback"
        },
        {
            "id" : 3,
            "mob_img": "m_3",
            "mobile_head" : "Galaxy A23",
            "cash" : "3% Cashback"
        },
        {
            "id" : 4,
            "mob_img": "m_4",
            "mobile_head" : "Apple iPhone 13",
            "cash" : "8% Cashback"
        },
        {
            "id" : 5,
            "mob_img": "m_5",
            "mobile_head" : "OPPO F17",
            "cash" : "12% Cashback"
        },
        {
            "id" : 6,
            "mob_img": "m_6",
            "mobile_head" : "Galaxy A23",
            "cash" : "3% Cashback"
        }
    ];

    let mobile_show = mobile_head.map(function(mob,m) {

        return `<div class="mob">
        <div class="mob_pics">
        <img src="asset/mobile/${mob.mob_img}.png" class="mobile_pic" alt="Kashkaro"/>
        </div>
        
      <div class="mob_head">
        <p class="mob_header">${mob.mobile_head}</p>
        <p class="mob_para">${mob.cash}</p>
      </div>
      </div>`  
    })
    
    document.getElementById('mob_act').innerHTML=mobile_show.join('');