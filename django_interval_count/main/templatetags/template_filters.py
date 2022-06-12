from django import template
from django.utils.dates import MONTHS

register = template.Library()

@register.filter(name='split_help_text')
def split(value, key):
    string_list = value.split(key)
    return_list = []
    for i in range(0, len(string_list)):
        if len(string_list[i]) > 0:
            return_list.append(string_list[i] + '.') # add again the dot removed

    return return_list


@register.filter(name='mask_cns')
def mask_cns(value):
    return value[:3] +' '+ value[3:7] +' '+ value[7:11] +' '+ value[11:15]


@register.filter(name='mask_cpf')
def mask_cpf(value):
    return value[:3] +'.'+ value[3:6] +'.'+ value[6:9] +'-'+ value[9:11]


@register.filter(name='mask_cnpj')
def mask_cnpj(value):
    return value[:2] +'.'+ value[2:5] +'.'+ value[5:8] +'/'+ value[8:12] +'-'+ value[12:14]

@register.filter(name='mask_cep')
def mask_cep(value):
    return value[:2] +'.'+ value[2:5] +'-'+ value[5:]


@register.filter(name='startswith')
def startswith(text, starts):
    if text.startswith(starts):
        return True
    else:
        return False

@register.filter(name='file_startswith')
def file_startswith(text, starts):
    if text.name.startswith(starts):
        return True
    else:
        return False


def brake_int(str_aux, value_int):
    aux1 = int(value_int)/1000

    aux2 = str(int(str(aux1).split(".")[1])) if int(aux1) >= 0 else str(aux1).split(".")[1]

    if int(aux1) >= 0:
        if int(aux2) < 100:
            aux2 = "0"+str(int(str(aux1).split(".")[1]))

    if str_aux == "":
        str_aux += aux2
    elif int(aux2) > 0:
        aux2 = "{:0>3}".format(aux2)
        str_aux = ".".join([aux2, str_aux])

    if int(aux2) == 0:
        # Confere maior grupo para remover zeros
        while str_aux.startswith("0"):
            str_aux = str_aux[1:]
        return str_aux
    else:
        return brake_int(str_aux, int(aux1))
    
    
@register.filter(name='mask_money')
def mask_money(value, sign):
    str_value = str(value)
    
    int_part = brake_int("", str_value.split(".")[0])
    dec_part = str_value.split(".")[1]
    str_value = ",".join([int_part, dec_part]) 
    
    return " ".join([sign, str_value])

@register.simple_tag
def get_uf(cities_uf):
    return cities_uf[-2:]


def get_str_date_comp(date_object):
    #months_dict = {""}
    month_choices = dict(MONTHS.items())

    month = month_choices[date_object.month]

    return f"{month} de {date_object.year}"

@register.filter(name='dict_template_value')
def dict_template_value(d, value_choiced):
    # value_choiced deve ser:
    #   uma string com a chave
    
    # Exemplo de um dict_template
    #dict_template['templatePerson'] = {
    #    'cod': slug_searched, # código a ser carregado (primary key ou slug)
    #    'filter': area_choiced, # Filtro de identificação. No caso deste template é 'area_choiced'
    #    }

    value_back = None
    
    for key, value in d.items():
        if key == 'templatePerson':
            for keyB, valueB in value.items():
                if keyB == value_choiced:
                    value_back = valueB
                    break

    return value_back

# Verifica se usuário pertence ao grupo informado
@register.filter(name='isin_group')
def isin_group(user, group_name):
    return user.groups.filter(name=group_name).exists()
