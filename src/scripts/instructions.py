import re
import json


def parse_instruction_file(filepath) -> list:
    instructions = []
    with open(filepath) as f:
        for line in f:
            if len(line) > 0:
                instructions.append(line.split('\t'))

    return instructions


def convert_to_json(instructions : list) -> str:
    instructions_str = json.dumps([{
            "label": inst[0].lower(), 
            "detail": "CPU instruction",
            "documentation": inst[1].strip(),
            "insertText": inst[0].lower() + " "
        } for inst in instructions])

    return instructions_str


def main():
    in_file_path = '../../resources/instructions.txt'
    out_file_path = '../../resources/instructions.json'
    with open(out_file_path, 'w') as f:
        print(convert_to_json(parse_instruction_file(in_file_path)), file=f)
    pass


if __name__ == "__main__":
    main()
