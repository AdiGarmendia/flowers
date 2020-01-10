const Retailer = (retailer, distributer) => {
  return `
      <div class="retailer">
    <header class="retailer__name">
        <h3>${retailer.name}</h3>
    </header>
    <section class="retailer__city">
        City: ${retailer.city}
    </section>
    <section class="retailer__state">
        State: ${retailer.state}
    </section>
    <section class="retailer__address">
        Address: ${retailer.address}
    </section>
    <section class="retailer__distributer">
        Distributer: ${distributer.name}
    </section>
    <div>
                
</div>
  `;
};

export default Retailer;