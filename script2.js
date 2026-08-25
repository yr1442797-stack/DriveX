
// car
 /* --- JAVASCRIPT LOGIC --- */
    
    // Array of 15 Cars
    const cars = [
      { id: 1, name: "Porsche 911 GT3", category: "Sports", desc: "A high-performance sports car engineered for speed and precision.", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80" },
      { id: 2, name: "Tesla Model S Plaid", category: "Electric", desc: "Tri-motor electric sedan capable of groundbreaking acceleration.", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" },
      { id: 3, name: "Rolls-Royce Phantom", category: "Luxury", desc: "The pinnacle of handcrafted luxury and ultra-quiet ride comfort.", img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "Ferrari F8 Tributo", category: "Sports", desc: "A homage to the most powerful V8 engine in Ferrari history.", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80" },
      { id: 5, name: "Porsche Taycan", category: "Electric", desc: "Pure electric sports car performance combined with everyday usability.", img: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Bentley Continental GT", category: "Luxury", desc: "Unmatched grand touring blending effortless power and artisan luxury.", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=600&q=80" },
      { id: 7, name: "Lamborghini Huracán", category: "Sports", desc: "Naturally aspirated V10 supercar designed for breathtaking performance.", img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=600&q=80" },
      { id: 8, name: "Audi RS e-tron GT", category: "Electric", desc: "A sleek electric grand tourer with striking design and dynamic performance.", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" },
      { id: 9, name: "Mercedes-Maybach S-Class", category: "Luxury", desc: "First-class executive luxury with high-end tech and supreme elegance.", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" },
      { id: 10, name: "Chevrolet Corvette Z06", category: "Sports", desc: "American supercar icon with a high-revving mid-engine V8.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" },
      { id: 11, name: "Lucid Air Sapphire", category: "Electric", desc: "Ultra-high performance luxury EV with immense range and horsepower.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80" },
      { id: 12, name: "Aston Martin DB12", category: "Luxury", desc: "The world's first Super Tourer with dramatic styling and rich heritage.", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80" },
      { id: 13, name: "McLaren 720S", category: "Sports", desc: "Lightweight, aerodynamic super sports car built for track dominance.", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=600&q=80" },
      { id: 14, name: "BMW i7", category: "Electric", desc: "Fully electric luxury sedan combining tech innovation and prestige.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },
      { id: 15, name: "Bugatti Chiron", category: "Sports", desc: "Hypercar pushing the boundaries of automotive engineering and top speed.", img: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=600&q=80" }
    ];

    // Function to Render Cars
    function renderGallery(carList) {
      const gallery = document.getElementById('carGallery');
      gallery.innerHTML = '';

      carList.forEach(car => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(car);

        card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${car.img}" alt="${car.name}" loading="lazy">
          </div>
          <div class="card-body">
            <div>
              <div class="card-category">${car.category}</div>
              <h3 class="card-title">${car.name}</h3>
            </div>
            <p class="card-desc">${car.desc}</p>
          </div>
        `;
        gallery.appendChild(card);
      });
    }

    // Function to Filter Cars
    function filterCars(category) {
      // Update active button state
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(btn => {
        if (btn.innerText.toLowerCase() === category.toLowerCase() || (category === 'all' && btn.innerText === 'All Cars')) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Filter array
      if (category === 'all') {
        renderGallery(cars);
      } else {
        const filtered = cars.filter(car => car.category === category);
        renderGallery(filtered);
      }
    }

    // Modal Control Functions
    function openModal(car) {
      document.getElementById('modalTitle').innerText = car.name;
      document.getElementById('modalCategory').innerText = car.category + " Vehicle";
      document.getElementById('modalDesc').innerText = car.desc;
      document.getElementById('carModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('carModal').style.display = 'none';
    }

    // Initialize display on load
    renderGallery(cars);