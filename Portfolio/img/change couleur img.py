import os
from PIL import Image

script_dir = os.path.dirname(os.path.abspath(__file__))
image_path = os.path.join(script_dir, "linkedin.png")

print(f"Tentative d'ouverture de : {image_path}")

try:
    img = Image.open(image_path).convert("RGBA")
    
    new_color = (218, 97, 255, 255)
    
    color_layer = Image.new("RGBA", img.size, new_color)

    result = Image.composite(color_layer, Image.new("RGBA", img.size, (0, 0, 0, 0)), img)
    
    output_path = os.path.join(script_dir, "result.png")
    result.save(output_path)
    print(f"Succès ! L'image est sauvegardée ici : {output_path}")

except Exception as e:
    print(f"Une erreur est survenue : {e}")