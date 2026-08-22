class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
  }

  getValues() {
    if (!this.formElement) return {};
    const formData = new FormData(this.formElement);
    const values = {};
    formData.forEach((value, key) => {
      values[key] = value;
    });
    return values;
  }

  isValid() {
    if (!this.formElement) return false;
    return this.formElement.checkValidity();
  }

  reset() {
    if (this.formElement) {
      this.formElement.reset();
    }
  }
}

export default Form;
