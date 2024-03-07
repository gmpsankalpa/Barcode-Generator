document.getElementById("btn").addEventListener("click", () => {
    const text = document.getElementById("text").value;
    JsBarcode("#barcode", text);
});

