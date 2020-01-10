const Flower = (flower) => {
  return `
      <div class="flower">
    <header class="flower__name">
        <h3>${flower.commonName}</h3>
    </header>
    <section class="flower__color">
        Color: ${flower.color}
    </section>
    <div>
                
</div>
  `;
};

export default Flower;