import string
import os

def data_cryptor(data):
    def letter_cryptor(data):
        output = ''
        all_letters = string.ascii_letters 
        for data_chr in data:
            find = False
            for i in range(len(all_letters)):
                if data_chr == all_letters[i]: 
                    output += all_letters[len(all_letters)-i-1]
                    find = True
            if not find: output += data_chr
        return output
    def int_cryptor(data):
        output = ''
        digits = string.digits
        for data_chr in data:
            find = False
            for i in range(len(digits)):
                if data_chr == digits[i]: 
                    output += digits[len(digits)-i-1]
                    find = True
            if not find: output += data_chr
        return output
    def reverse_cryptor(data): return data[::-1]

    output = letter_cryptor(data)
    output = int_cryptor(output)
    output = reverse_cryptor(output)

    return output
def file_name_cryptor(name:str, name_get = False):
    if name_get:
        if name.endswith(".Vrun"): return data_cryptor(name.replace(".Vrun", ""))
        else: return name        

    if name.endswith(".Vrun"): return name
    else:
        name = name.replace('\\','/').replace('/',':').replace(':','*').replace('*','?').replace('?','"').replace('"','<').replace('<','>').replace('>','|').replace('|',' ')
        name = data_cryptor(name)
        return(f"{name}.Vrun")
def encrypt_folder(folder, decrypt=False):
    for file in os.listdir(folder): 
        if os.path.isfile(f"{folder}\\{file}"):
            os.rename(f"{folder}\\{file}", f"{folder}\\{file_name_cryptor(file, name_get=decrypt)}")
            
def encrypt_folders(folders, decrypt=False):
    for folder in folders: encrypt_folder(folder, decrypt=decrypt)
    
def name_changer(folders, decrypt=False):
    for folder in folders: 
        encrypt_folder(folder, decrypt=decrypt)

#name_changer(['download'], decrypt=True)
name_changer(['download'])

with open ('files.js','w') as f:
    f.write(f"files = [")
    for i in os.listdir('download'):
        f.write(f"'download\\\\{i}',")
    f.write(f"]")

#import time 
#for i in range(10000):
#    time.sleep(10)
#    print(i)
#    name_changer(['download'])