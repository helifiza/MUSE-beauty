'use strict';

// Dữ liệu minh họa: chỉnh tên, giá, ảnh và mô tả sản phẩm tại đây.
const products = [
  { id: 'M01', name: 'Kẹp tóc ngọc trai Élise', category: 'hair', price: 89000, image: 'hair', badge: 'YÊU THÍCH', material: 'Acetate, hạt ngọc trai nhân tạo', color: 'Kem ngà', description: 'Một điểm nhấn dịu dàng cho mái tóc búi gọn. Dáng kẹp càng cua cùng hàng ngọc trai nhỏ mang đến vẻ thanh lịch, dễ phối với trang phục đi học, đi làm hay dạo phố.', care: 'Lau bằng khăn mềm hơi ẩm. Tránh làm rơi, bẻ mạnh hoặc để gần nguồn nhiệt.' },
  { id: 'M02', name: 'Khuyên tai ngọc trai Luna', category: 'jewelry', price: 159000, image: 'earrings', badge: 'NỔI BẬT', material: 'Hợp kim màu vàng, ngọc trai', color: 'Vàng champagne · trắng ngọc trai', description: 'Đôi khuyên dáng vòng nhỏ với điểm nhấn ngọc trai rủ nhẹ. Một lựa chọn tinh tế để phối cùng váy mềm, áo sơ mi hoặc bộ trang phục tối giản yêu thích.', care: 'Tránh tiếp xúc với nước hoa, hóa chất và nước. Lau khô sau khi dùng, cất riêng trong túi mềm.' },
  { id: 'M03', name: 'Bộ cọ trang điểm Rosé', category: 'beauty', price: 229000, image: 'brush', badge: 'MUSE PICKS', material: 'Sợi tổng hợp, cán nhựa, cổ kim loại', color: 'Hồng đất · vàng champagne', description: 'Bộ 5 cọ với nhiều kích cỡ cho các bước trang điểm hằng ngày. Thiết kế cán hồng nhẹ nhàng, dễ cầm và gọn gàng trên bàn làm đẹp của bạn.', care: 'Giặt đầu cọ bằng dung dịch dịu nhẹ, tránh ngâm cán cọ. Phơi nằm ngang ở nơi thoáng khí.' },
  { id: 'M04', name: 'Túi mỹ phẩm Cloud', category: 'bags', price: 139000, image: 'pouch', badge: '', material: 'Vải chần bông, khóa kéo kim loại', color: 'Hồng phấn', description: 'Chiếc túi mềm mại để gom những món đồ nhỏ bạn yêu thích. Kiểu chần bông thanh lịch phù hợp mang theo trong túi xách, đi học hay những chuyến đi ngắn.', care: 'Lau vết bẩn bằng khăn ẩm và xà phòng dịu nhẹ. Để túi khô hoàn toàn trước khi cất mỹ phẩm.' },
  { id: 'M05', name: 'Nơ satin Belle', category: 'hair', price: 69000, image: 'bow', badge: 'NHẸ NHÀNG', material: 'Vải satin, kẹp kim loại', color: 'Kem ngà', description: 'Dải nơ satin mềm với phần đuôi rủ thanh thoát. Kẹp trên tóc buộc nửa hoặc tóc đuôi ngựa để thêm một chút lãng mạn cho diện mạo hằng ngày.', care: 'Giặt nhẹ phần vải bằng nước mát. Không vắt xoắn; tránh làm ướt lâu phần kẹp kim loại.' },
  { id: 'M06', name: 'Scrunchie lụa Petal', category: 'hair', price: 49000, image: 'scrunchie', badge: '', material: 'Vải lụa satin, thun co giãn', color: 'Hồng đất', description: 'Dây buộc tóc bồng nhẹ với sắc hồng dịu. Dễ dùng cho tóc buộc thấp, búi lơi hoặc đeo trên cổ tay như một phụ kiện nhỏ xinh.', care: 'Giặt bằng tay với nước mát, không dùng chất tẩy mạnh. Phơi trong bóng râm để giữ màu vải.' },
  { id: 'M07', name: 'Dây chuyền ngọc trai Lumi', category: 'jewelry', price: 189000, image: 'necklace', badge: 'TINH TẾ', material: 'Dây hợp kim màu vàng, mặt ngọc trai', color: 'Vàng champagne · trắng', description: 'Sợi dây mảnh cùng một viên ngọc trai làm điểm nhấn. Thiết kế vừa đủ nổi bật trên cổ áo trơn, dành cho những ngày bạn yêu sự tinh giản.', care: 'Đeo sau khi dùng nước hoa. Cất riêng, tránh kéo căng dây và lau nhẹ bằng khăn khô sau mỗi lần sử dụng.' },
  { id: 'M08', name: 'Vòng tay ngọc trai Aura', category: 'jewelry', price: 129000, image: 'bracelet', badge: '', material: 'Hạt ngọc trai, khóa hợp kim màu vàng', color: 'Trắng ngọc trai', description: 'Chuỗi ngọc trai nhỏ ôm nhẹ cổ tay, tạo nét mềm mại và thanh lịch. Có thể phối cùng đồng hồ hoặc đeo riêng để giữ vẻ đẹp nhẹ nhàng.', care: 'Tránh va chạm mạnh và ngâm nước. Bảo quản trong túi riêng để hạn chế trầy xước.' },
  { id: 'M09', name: 'Gương cầm tay Soleil', category: 'beauty', price: 99000, image: 'mirror', badge: '', material: 'Mặt gương thủy tinh, khung kim loại', color: 'Vàng champagne', description: 'Chiếc gương tròn với tay cầm thanh mảnh, thêm một nét cổ điển cho góc làm đẹp. Nhỏ gọn để kiểm tra lớp trang điểm hoặc chỉnh lại mái tóc.', care: 'Lau mặt gương bằng khăn mềm sạch. Để ở nơi chắc chắn, tránh rơi vỡ và vật sắc nhọn.' },
  { id: 'M10', name: 'Mút trang điểm Soft Touch', category: 'beauty', price: 59000, image: 'sponge', badge: 'BỘ 2 MÚT', material: 'Mút trang điểm tổng hợp', color: 'Hồng đất · beige', description: 'Bộ đôi mút hình giọt nước với đầu nhọn cho vùng khóe mũi và mặt cong cho vùng má. Một phụ kiện cơ bản để tán lớp nền đều hơn.', care: 'Giặt sạch sau khi dùng và để khô hoàn toàn ở nơi thoáng. Thay mút khi có dấu hiệu xuống cấp.' }
];
const categories = { hair: 'Phụ kiện tóc', jewelry: 'Trang sức', beauty: 'Dụng cụ làm đẹp', bags: 'Túi mỹ phẩm' };
const currency = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
const grid = document.querySelector('#product-grid');
const search = document.querySelector('#tim-kiem');
const sort = document.querySelector('#sort');
const dialog = document.querySelector('#product-dialog');
const favoritesToggle = document.querySelector('#favorites-toggle');
const detailFavorite = document.querySelector('#detail-favorite');
let selectedCategory = 'all';
let favoritesOnly = false;
let activeProduct = null;
let toastTimer;
let favorites = new Set();
try {
  const saved = JSON.parse(localStorage.getItem('muse-favorites') || '[]');
  if (Array.isArray(saved)) favorites = new Set(saved.filter(id => products.some(product => product.id === id)));
} catch { /* Vẫn cho phép sử dụng khi trình duyệt chặn lưu trữ. */ }

const icon = name => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();

function renderProducts() {
  const query = normalize(search.value.trim());
  const visible = products.filter(product =>
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    (!favoritesOnly || favorites.has(product.id)) &&
    normalize(`${product.name} ${categories[product.category]} ${product.id}`).includes(query)
  );
  if (sort.value === 'price-asc') visible.sort((a, b) => a.price - b.price);
  if (sort.value === 'price-desc') visible.sort((a, b) => b.price - a.price);
  if (sort.value === 'name') visible.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
  grid.innerHTML = visible.map(product => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        <button class="product-open" data-open="${product.id}" aria-label="Xem ${product.name}"><img src="assets/${product.image}.png" alt="${product.name}" width="1024" height="1024" loading="lazy"><span class="quick-view">Khám phá chi tiết ↗</span></button>
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="icon-button product-heart" data-favorite="${product.id}" aria-label="${favorites.has(product.id) ? 'Bỏ yêu thích' : 'Yêu thích'} ${product.name}" aria-pressed="${favorites.has(product.id)}">${icon('heart')}</button>
      </div>
      <div class="product-info"><p class="product-category">${categories[product.category]}</p><h3 class="product-name"><button data-open="${product.id}">${product.name}</button></h3><div class="product-bottom"><p class="product-price">${currency.format(product.price)}</p><button class="icon-button" data-open="${product.id}" aria-label="Chi tiết ${product.name}">${icon('arrow')}</button></div></div>
    </article>`).join('');
  document.querySelector('#result-count').textContent = `${visible.length} sản phẩm ${favoritesOnly ? 'trong danh sách yêu thích' : 'trong bộ sưu tập'}`;
  document.querySelector('#empty-state').hidden = visible.length > 0;
  document.querySelector('#reset-filters').hidden = selectedCategory === 'all' && !search.value && !favoritesOnly && sort.value === 'default';
  document.querySelector('#favorite-count').textContent = favorites.size;
  favoritesToggle.setAttribute('aria-pressed', String(favoritesOnly));
  favoritesToggle.setAttribute('aria-label', `Xem sản phẩm yêu thích (${favorites.size} sản phẩm)`);
}

function notify(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}

function toggleFavorite(id) {
  if (!products.some(product => product.id === id)) return;
  const wasFavorite = favorites.has(id);
  wasFavorite ? favorites.delete(id) : favorites.add(id);
  let persisted = true;
  try { localStorage.setItem('muse-favorites', JSON.stringify([...favorites])); } catch { persisted = false; }
  const focusedId = document.activeElement?.dataset.favorite;
  const oldButtonIds = [...grid.querySelectorAll('[data-favorite]')].map(button => button.dataset.favorite);
  renderProducts();
  if (focusedId) {
    const remaining = [...grid.querySelectorAll('[data-favorite]')];
    const next = remaining.find(button => button.dataset.favorite === focusedId) || remaining[Math.min(oldButtonIds.indexOf(focusedId), remaining.length - 1)] || document.querySelector('#show-all');
    next.focus();
  }
  if (activeProduct) updateDetailFavorite();
  notify(`${wasFavorite ? 'Đã bỏ khỏi' : 'Đã thêm vào'} danh sách yêu thích${persisted ? '.' : ' trong phiên này.'}`);
}

function updateDetailFavorite() {
  const saved = favorites.has(activeProduct.id);
  detailFavorite.setAttribute('aria-pressed', String(saved));
  detailFavorite.querySelector('span').textContent = saved ? 'Đã lưu · Bỏ yêu thích' : 'Lưu vào yêu thích';
}

let dialogTrigger = null;
function openProduct(id, trigger) {
  activeProduct = products.find(product => product.id === id);
  if (!activeProduct) return;
  dialogTrigger = trigger;
  const fields = { name: activeProduct.name, category: categories[activeProduct.category], price: currency.format(activeProduct.price), description: activeProduct.description, material: activeProduct.material, color: activeProduct.color, code: activeProduct.id, care: activeProduct.care };
  for (const [key, value] of Object.entries(fields)) document.querySelector(`#detail-${key}`).textContent = value;
  const image = document.querySelector('#detail-image');
  image.src = `assets/${activeProduct.image}.png`;
  image.alt = activeProduct.name;
  updateDetailFavorite();
  dialog.showModal();
  document.body.classList.add('modal-open');
  document.querySelector('#close-dialog').focus();
}

grid.addEventListener('click', event => {
  const opener = event.target.closest('[data-open]');
  const favorite = event.target.closest('[data-favorite]');
  if (opener) openProduct(opener.dataset.open, opener);
  if (favorite) toggleFavorite(favorite.dataset.favorite);
});
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  selectedCategory = button.dataset.category;
  document.querySelectorAll('[data-category]').forEach(filter => {
    const active = filter.dataset.category === selectedCategory;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  renderProducts();
}));
search.addEventListener('input', renderProducts);
sort.addEventListener('change', renderProducts);
favoritesToggle.addEventListener('click', () => {
  favoritesOnly = !favoritesOnly;
  renderProducts();
  document.querySelector('#san-pham').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
function resetFilters() {
  selectedCategory = 'all'; favoritesOnly = false; search.value = ''; sort.value = 'default';
  document.querySelectorAll('[data-category]').forEach(button => { const active = button.dataset.category === 'all'; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  renderProducts();
  search.focus({ preventScroll: true });
}
document.querySelector('#reset-filters').addEventListener('click', resetFilters);
document.querySelector('#show-all').addEventListener('click', resetFilters);
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  const replacement = grid.querySelector(`[data-open="${activeProduct?.id}"]`);
  if (dialogTrigger?.isConnected) dialogTrigger.focus({ preventScroll: true });
  else (replacement || favoritesToggle).focus({ preventScroll: true });
});
detailFavorite.addEventListener('click', () => { if (activeProduct) toggleFavorite(activeProduct.id); });
const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Mở menu');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Mở menu'); menuToggle.focus(); }
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) navigation.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  ['san-pham', 've-muse', 'goc-nho'].forEach(id => observer.observe(document.getElementById(id)));
}
renderProducts();
