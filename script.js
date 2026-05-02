const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15",
      preco: 5999.90,
      categoria: "Celulares",
      imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmlplMx5_aZSgUrQlOrrBHKODPWPT8iUB4naZ8BXWukm-u95F3UIo0ZyY2cGAua7Q4w5XtoEfRJyFmEXcNpVUKhkPczqzp6IJg_wG69jOgtTFjNkYoLxF8kH8",
      descricao: "Smartphone Apple com câmera avançada.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S25",
      preco: 4899.90,
      categoria: "Celulares",
      imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjaAUNNUSzfvXsaPKAfwgESNnlGG_QFFvZ_e8A17jniyDVKJKfInsPeKNGgxCBMmPBgcVAWHTyIg8iIJeGOx-KB86vLObjVUxcsUQpsUVQP0MFj_R_wor-4g",
      descricao: "Celular Samsung de última geração.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Notebook Dell",
      preco: 4200.00,
      categoria: "Notebooks",
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBp7snsy-aFkFpUMMVcP3Ofb05uBRarnRoWgdWypIEZ-odLMqTsTAEFqCjshti5fEMNjOvaVCDDawhcOQ1iGUe-JYEokFrg3SVeLNQNcfhtRAvpxrVxnhzL9U",
      descricao: "Notebook ideal para estudos e trabalho.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "MacBook Air",
      preco: 8999.90,
      categoria: "Notebooks",
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7Jia6ZbtjmQdVPM98vLbzxIEhDhpkYX16VlhVO9uzLuOvcE55_mnScHH-5jxV5en1QSeN6qjBSoJFZO12m8C7fgQJEuOhLVsSId48TIJXV8kaK6dzQov0gg",
      descricao: "Notebook Apple leve e potente.",
      emEstoque: false
    },
    {
      id: 5,
      nome: "Mouse Gamer",
      preco: 199.90,
      categoria: "Acessórios",
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTT3J6tPPdeS4IoedMyq1Wfke4X3Q6lFh3Au4STjBhAP4W1eCePqw5yhMGxTMQrsWU4USFQcpw0dBqyo2o7HxYbd6p9LnqHiA",
      descricao: "Mouse RGB para jogos.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Teclado Mecânico",
      preco: 350.00,
      categoria: "Acessórios",
      imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsPd3Dtjq47BE_qpMl-XITDZPi8keXuQP6gEN7g-UMN6-R75rPv-__v-_PEfCfy-ErArVd2B8OwZg8fe7X2A5G9qR0CnnM4a9lPY6u0ZOrGDB5zqEW-VkssVc",
      descricao: "Teclado mecânico com iluminação RGB.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "PlayStation 5",
      preco: 3999.90,
      categoria: "Games",
      imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvEU4PgJVZD1tGZajvMmNlemQXPjW6lkDSdYT8iSXCYO_BaPwUn4uKeghXoRCTxPLZVqO6ng1rs2JwTbG85dhhnnNH0ZIf",
      descricao: "Console de última geração da Sony.",
      emEstoque: false
    },
    {
      id: 8,
      nome: "Xbox Series X",
      preco: 5000.90,
      categoria: "Games",
      imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThvonyxQUyX2b5YdpCcVYAUTBCpK7ux3LPczajeThevVXcafbH-oTQqkMPPR6x3-Gyren170Xu8cRKbNq0z1y4kouc3wqvxg",
      descricao: "Console poderoso da Microsoft.",
      emEstoque: true
    }
  ]
};
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");

const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.querySelector("#btnRender");


function formatPrice(preco) {
  return `R$ ${preco.toFixed(2)}`;
}


function createProductCard(produto) {

  const card = document.createElement("div");

  card.classList.add("card");


  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";

  card.setAttribute("data-id", produto.id);

  const imagem = document.createElement("img");
  imagem.setAttribute("src", produto.imagem);

  const content = document.createElement("div");
  content.classList.add("card-content");

  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.textContent = formatPrice(produto.preco);

  const categoria = document.createElement("p");
  categoria.textContent = produto.categoria;

  const btnDetalhes = document.createElement("button");
  btnDetalhes.textContent = "Ver detalhes";

  const btnDestaque = document.createElement("button");
  btnDestaque.textContent = "Destacar";



  btnDetalhes.addEventListener("click", () => {
    showProductDetails(produto);
  });

  btnDestaque.addEventListener("click", () => {
    card.classList.toggle("highlight");
  });

  content.appendChild(titulo);
  content.appendChild(preco);
  content.appendChild(categoria);
  content.appendChild(btnDetalhes);
  content.appendChild(btnDestaque);

  card.appendChild(imagem);
  card.appendChild(content);

  return card;
}

function renderProducts(produtos) {

  productList.innerHTML = "";

  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });


  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    console.log("Card ID:", card.getAttribute("data-id"));


    card.style.backgroundColor = "#fff";
  });
}


function renderCategories() {

  const categorias = data.produtos.map(produto => produto.categoria);

  const categoriasUnicas = [...new Set(categorias)];

  categorySelect.innerHTML = '<option value="Todas">Todas</option>';

  categoriasUnicas.forEach(categoria => {

    const option = document.createElement("option");

    option.value = categoria;
    option.textContent = categoria;

    categorySelect.appendChild(option);
  });
}


function showProductDetails(produto) {

  productDetails.innerHTML = `
    <h2>${produto.nome}</h2>
    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
    <p><strong>Categoria:</strong> ${produto.categoria}</p>
    <p><strong>Estoque:</strong> ${
      produto.emEstoque ? "Disponível" : "Indisponível"
    }</p>
    <p><strong>Descrição:</strong> ${produto.descricao}</p>
  `;
}

function filterProducts() {

  const textoBusca = searchInput.value.toLowerCase();

  const categoriaSelecionada = categorySelect.value;

  return data.produtos.filter(produto => {

    const matchNome =
      produto.nome.toLowerCase().includes(textoBusca);

    const matchCategoria =
      categoriaSelecionada === "Todas" ||
      produto.categoria === categoriaSelecionada;

    return matchNome && matchCategoria;
  });
}


searchInput.addEventListener("input", () => {
  const produtosFiltrados = filterProducts();
  renderProducts(produtosFiltrados);
});

categorySelect.addEventListener("change", () => {
  const produtosFiltrados = filterProducts();
  renderProducts(produtosFiltrados);
});

btnRender.addEventListener("click", () => {
  renderProducts(data.produtos);
});


renderCategories();
renderProducts(data.produtos);