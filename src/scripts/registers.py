import re
import json


def parse_register_file(filepath) -> list:
    registers = []
    with open(filepath) as f:
        registers = re.findall(r'\%(\w+)', f.read())

    return registers


def convert_to_json(registers : list) -> str:
    registers_str = json.dumps([{"label": reg} for reg in registers])
    return registers_str


def main():
    in_file_path = '../../resources/registers.txt'
    out_file_path = '../../resources/registers.json'
    with open(out_file_path, 'w') as f:
        print(convert_to_json(parse_register_file(in_file_path)), file=f)
    pass


if __name__ == "__main__":
    main()
