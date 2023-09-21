export function CacheMapping() {
  return (
    <>
    <h1 className="text-center">Coming soon</h1>
      {/* <div class="app">

        <div class="upper_menu">
          <label for="method_selector">Método de mapeamento: </label>
          <select name="method_selector" id="method_selector">
            <option value='0'>Direto</option>
            <option value='1'>Associativo</option>
            <option value='2'>Associativo por conjuntos</option>
          </select >
          <input onload="update_method()" id="update_method_button" type="button" value="Atualizar" onclick="update_method()"></input>

          <div id="policy_selector_region" style="visibility: hidden">
            <label for="policy_selector" style="padding-left: 8px">Política de mapeamento: </label>
            <select name="policy_selector" id="policy_selector">
              <option value='0'>Random</option>
              <option value='1'>LFU</option>
              <option value='2'>LRU</option>
            </select >
            <input onload="update_policy()" id="update_policy_button" type="button" value="Atualizar" onclick="update_policy()"></input>
          </div>

          <input type="checkbox" value="clean_reset" name="clean_reset_checkbox" id="clean_reset_checkbox" checked="false" onchange="fill_on_reset = this.checked"></input>
          <label for="clean_reset_checkbox" id="clean_reset_checkbox_label">Preencher cache ao atualizar método/política</label>
        </div>

        <div id="sketch">
          <div id="canvas"></div>
          <div id="memory_menu">
            <div id="insert-menu" hidden="true">
              <input id="insert_address" type="number" placeholder="Endereço"></input>
              <input id="insert_data" type="number" placeholder="Dado"></input>
            </div>
            <button id="insert" hidden="true" onclick="memory.insert(document.getElementById('insert_address').value, document.getElementById('insert_data').value)">Inserir</button>
            <button id="clear_memory" onclick="memory.clear()">Limpar</button>
            <button id="fill_memory" onclick="memory.fill()">Preencher</button>
          </div>
          <div id="cache_menu">
            <button id="clear_cache" onclick="cache.clear()">Limpar</button>
          </div>
          <div id="search_menu">
            <b>Buscar valor por endereço</b>
            <br></br>
            <input id="address" type="number" placeholder="Endereço"></input>
            <button id="search_button" onclick="search()">Buscar</button>
          </div>
        </div>

        <div id="theme_selector">
          <button onclick="switch_color_scheme()">Alternar esquema de cores</button>
        </div>

      </div> */}
    </>
  );
}

export default CacheMapping;