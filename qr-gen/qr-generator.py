import qrcode

# Replace 'member_id_value' with the actual member ID
member_id = 'member_id_value'

# Create the QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(member_id)
qr.make(fit=True)

# Save the QR code to a file
img = qr.make_image(fill_color="black", back_color="white")
img.save("member_id_qr.png")
