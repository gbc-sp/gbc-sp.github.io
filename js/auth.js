if (localStorage.getItem('skillpod') != 'true') {
    const modal = document.createElement('div');
    modal.classList.add('modal')
    modal.innerHTML = `
      <form class="modal-form" id="skillpodmodal">
        <label class="modal-label">What's the secret word?</label>
        <input type="password" name="password" id="password">
        <input type="submit" name="submit" value="send">
      </form>
    `;
    document.body.appendChild(modal);
  
    document.getElementById('skillpodmodal').addEventListener('submit', e => {
      e.preventDefault();
      console.log(this.password.value)
      if (this.password.value == "skillpod") {
        localStorage.setItem('skillpod', 'true');
        document.body.removeChild(modal);
      }
    });
  }