// Menu data
const menuData = {
  starters: [
    {
      id: 'starter-1',
      name: 'Chicken Skewers',
      image: 'images/chicken skewers.jpg',
      price: 12.99,
      serving: 'Serves 2',
      desc: 'Succulent grilled chicken pieces marinated in aromatic spices, charred to perfection on traditional wooden skewers. Served with a tangy yogurt dip and fresh herbs.',
      extras: ['Garlic aioli', 'Extra lemon', 'Grilled vegetables', 'Rice pilaf']
    },
    {
      id: 'starter-2',
      name: 'Grilled Salmon Tartare',
      image: 'images/grilled salmon.jpg',
      price: 14.99,
      serving: 'Serves 1',
      desc: 'Fresh Atlantic salmon finely diced with capers, shallots, and a citrus vinaigrette. Topped with crispy croutons and microgreens.',
      extras: ['Avocado', 'Capers', 'Extra croutons', 'Wasabi mayo']
    },
    {
      id: 'starter-3',
      name: 'Opera Cake Appetizer',
      image: 'images/Opera Cake.jpg',
      price: 9.99,
      serving: 'Serves 1',
      desc: 'Elegant mini opera cake showcasing layers of almond cake, coffee buttercream, and dark chocolate ganache. A sophisticated start to your meal.',
      extras: ['Whipped cream', 'Fresh berries', 'Gold leaf', 'Extra chocolate']
    }
  ],
  mains: [
    {
      id: 'main-1',
      name: 'Grilled Salmon Fillet',
      image: 'images/grilled salmon.jpg',
      price: 22.99,
      serving: 'Serves 1',
      desc: 'Premium wild-caught Atlantic salmon grilled to perfection with herb butter, served with seasonal vegetables and roasted potatoes. A culinary masterpiece.',
      extras: ['Asparagus', 'Mushroom sauce', 'Truffle oil', 'Lemon dill butter', 'Side salad']
    },
    {
      id: 'main-2',
      name: 'Herb-Roasted Chicken',
      image: 'images/chicken skewers.jpg',
      price: 18.99,
      serving: 'Serves 1',
      desc: 'Tender free-range chicken roasted with thyme, rosemary, and garlic, served with creamed spinach and golden root vegetables.',
      extras: ['Crispy skin', 'Jus gravy', 'Garlic mashed potatoes', 'Brussels sprouts', 'Truffle cream']
    },
    {
      id: 'main-3',
      name: 'Pan-Seared Fish of the Day',
      image: 'images/grilled salmon.jpg',
      price: 24.99,
      serving: 'Serves 1',
      desc: 'Chef\'s selection of the finest fresh catch, prepared with a delicate lemon beurre blanc, baby vegetables, and cauliflower puree.',
      extras: ['Caviar', 'Microgreens', 'Saffron rice', 'Shellfish bisque', 'Edible flowers']
    }
  ],
  desserts: [
    {
      id: 'dessert-1',
      name: 'Opera Cake',
      image: 'images/Opera Cake.jpg',
      price: 9.99,
      serving: 'Serves 1',
      desc: 'Classic French confection with alternating layers of almond sponge, coffee buttercream, and glossy chocolate ganache. An elegant dessert experience.',
      extras: ['Vanilla ice cream', 'Whipped cream', 'Gold leaf', 'Fresh raspberries', 'Caramel drizzle']
    },
    {
      id: 'dessert-2',
      name: 'Chocolate Brownie',
      image: 'images/Choco Brownie.jpg',
      price: 7.99,
      serving: 'Serves 1',
      desc: 'Decadent dark chocolate brownie with a warm fudgy center, made with premium Belgian chocolate and a hint of sea salt.',
      extras: ['Vanilla ice cream', 'Chocolate sauce', 'Crushed nuts', 'Whipped cream', 'Espresso dusting']
    },
    {
      id: 'dessert-3',
      name: 'Coconut Pancakes',
      image: 'images/Coco pancake.jpg',
      price: 8.99,
      serving: 'Serves 2',
      desc: 'Fluffy coconut-infused pancakes stacked high and topped with tropical fruits, coconut cream, and toasted coconut flakes.',
      extras: ['Maple syrup', 'Fresh berries', 'Whipped cream', 'Yogurt', 'Honey drizzle', 'Extra coconut']
    }
  ],
  drinks: [
    {
      id: 'drink-1',
      name: 'Cappuccino',
      image: 'images/capachino.jpg',
      price: 5.99,
      serving: 'Single shot',
      desc: 'Premium espresso shots topped with velvety steamed milk and a layer of rich microfoam, finished with a sprinkle of cocoa powder.',
      extras: ['Extra shot', 'Oat milk', 'Almond milk', 'Cinnamon', 'Chocolate powder', 'Caramel']
    },
    {
      id: 'drink-2',
      name: 'Iced Latte',
      image: 'images/capachino.jpg',
      price: 6.49,
      serving: 'Large',
      desc: 'Chilled espresso blended with cold milk, ice, and a touch of sweetness. Perfect for a refreshing pick-me-up anytime.',
      extras: ['Double shot', 'Vanilla syrup', 'Caramel syrup', 'Coconut milk', 'Honey', 'Whipped cream']
    },
    {
      id: 'drink-3',
      name: 'Signature Smoothie',
      image: 'images/capachino.jpg',
      price: 7.99,
      serving: 'Medium',
      desc: 'Blend of fresh tropical fruits, Greek yogurt, and a touch of honey. Refreshing, creamy, and packed with natural goodness.',
      extras: ['Protein powder', 'Chia seeds', 'Granola', 'Extra honey', 'Coconut flakes', 'Almond butter']
    }
  ]
};

// App state
let currentCategory = null;
let currentItem = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  showView('home');
});

// Setup event listeners
function setupEventListeners() {
  // Category clicks
  document.querySelectorAll('.category').forEach(el => {
    el.addEventListener('click', function() {
      currentCategory = this.dataset.category;
      showCategory(currentCategory);
    });
  });

  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = this.dataset.target;
      if (target === 'home') {
        showView('home');
      } else if (target === 'category') {
        showCategory(currentCategory);
      }
    });
  });

  // Order form submit
  document.getElementById('order-form').addEventListener('submit', submitOrder);

  // Home link in thanks
  document.getElementById('back-home').addEventListener('click', (e) => {
    e.preventDefault();
    showView('home');
  });
}


// Show/hide views
function showView(viewName) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.add('hidden');
  });
  document.getElementById(`view-${viewName}`).classList.remove('hidden');
}

// Show category items
function showCategory(categoryName) {
  showView('category');
  
  // Update title
  const titleMap = {
    starters: 'Starters',
    mains: 'Main Meals',
    desserts: 'Desserts',
    drinks: 'Drinks'
  };
  document.getElementById('category-title').textContent = titleMap[categoryName];

  // Populate items list
  const itemsList = document.getElementById('items-list');
  itemsList.innerHTML = '';
  
  menuData[categoryName].forEach(item => {
    const li = document.createElement('li');
    li.className = 'item-card';
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-body">
        <h4>${item.name}</h4>
        <p>${item.desc.substring(0, 50)}...</p>
        <span class="item-price">$${item.price.toFixed(2)}</span>
      </div>
    `;
    li.addEventListener('click', () => showItem(categoryName, item.id));
    itemsList.appendChild(li);
  });
}

// Show item detail and order form
function showItem(categoryName, itemId) {
  const items = menuData[categoryName];
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  currentItem = item;
  showView('item');

  // Populate detail
  document.getElementById('item-image').src = item.image;
  document.getElementById('item-image').alt = item.name;
  document.getElementById('item-name').textContent = item.name;
  document.getElementById('item-price').textContent = `$${item.price.toFixed(2)}`;
  document.getElementById('item-serving').textContent = `📦 ${item.serving}`;
  document.getElementById('item-desc').textContent = item.desc;

  // Populate extras
  const extrasList = document.getElementById('extras-list');
  extrasList.innerHTML = '';
  item.extras.forEach((extra, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" id="extra-${idx}" name="extras" value="${extra}"> <label for="extra-${idx}">${extra}</label>`;
    extrasList.appendChild(li);
  });

  // Clear notes
  document.getElementById('notes').value = '';
}

// Submit order
function submitOrder(e) {
  e.preventDefault();

  if (!currentItem) return;

  // Get selected extras
  const extraCheckboxes = document.querySelectorAll('#extras-list input[type=checkbox]:checked');
  const extras = Array.from(extraCheckboxes).map(cb => cb.value);

  // Get notes
  const notes = document.getElementById('notes').value;

  // Build summary
  const summary = `
    <strong>${currentItem.name}</strong> - $${currentItem.price.toFixed(2)}<br>
    ${extras.length > 0 ? `<em>Extras: ${extras.join(', ')}</em><br>` : ''}
    ${notes ? `<em>Notes: ${notes}</em><br>` : ''}
    <br><i class="fa fa-check"></i> Your order has been placed successfully!
  `;

  document.getElementById('thanks-summary').innerHTML = summary;
  showView('thanks');
}
