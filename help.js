/* ORDERS */
function trackOrder() {
    const id = document.getElementById("orderId").value;
    document.getElementById("orderResult").innerText =
        id ? `Order ${id} is being processed.` : "Please enter Order ID.";
}

function cancelOrder() {
    document.getElementById("orderResult").innerText =
        "Your order cancellation request has been submitted.";
}

function returnOrder() {
    document.getElementById("orderResult").innerText =
        "Return / replacement request registered.";
}

/* PAYMENTS */
function checkRefund() {
    const id = document.getElementById("refundId").value;
    document.getElementById("paymentResult").innerText =
        id ? `Refund for Order ${id} will be processed in 3-5 days.` : "Enter Order ID.";
}

function paymentFailed() {
    document.getElementById("paymentResult").innerText =
        "Payment failed. Please try again or use another method.";
}

function codIssue() {
    document.getElementById("paymentResult").innerText =
        "COD issue reported. Our team will contact you.";
}

/* SHIPPING */
function checkDelivery() {
    const city = document.getElementById("city").value;
    document.getElementById("shippingResult").innerText =
        city ? `Estimated delivery to ${city}: 3-6 working days.` : "Please enter city.";
}

function delayedShipment() {
    document.getElementById("shippingResult").innerText =
        "Your shipment is delayed. We apologize for the inconvenience.";
}

/* ACCOUNT */
function resetPassword() {
    const email = document.getElementById("email").value;
    document.getElementById("accountResult").innerText =
        email ? `Password reset link sent to ${email}.` : "Please enter email.";
}

function updateProfile() {
    document.getElementById("accountResult").innerText =
        "Profile update page will open shortly.";
}

function deactivateAccount() {
    document.getElementById("accountResult").innerText =
        "Account deactivation request submitted.";
}