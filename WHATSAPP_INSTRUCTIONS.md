# WhatsApp Button Customization Instructions

The WhatsApp redirect button is automatically displayed after successful form submission. To customize the WhatsApp link:

## Method 1: Update via JavaScript Function (Recommended)

Call the `updateWhatsAppLink()` function with your WhatsApp link:

```javascript
// Example: Update with your WhatsApp group link
updateWhatsAppLink('https://chat.whatsapp.com/yourgrouplink');

// Or for a WhatsApp direct message link:
updateWhatsAppLink('https://wa.me/yourphonenumber?text=Hello');
```

## Method 2: Update the Global Variable Directly

You can also directly update the global WhatsApp link variable:

```javascript
// Set your custom WhatsApp link
window.TECHINNOVATE_WHATSAPP_LINK = 'https://chat.whatsapp.com/yourgrouplink';
```

## Default Link

The default WhatsApp link is:
```
https://chat.whatsapp.com/BrK7g7JjPsG5silp28znPB?mode=ac_t
```

## When to Update the Link

You should update the WhatsApp link before the page loads, or as early as possible in your page lifecycle. The button will use the most recently set link when it appears after form submission.
</result>
</attempt_completion>