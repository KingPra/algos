def caesarCipherEncryptor(string, key):
    alphabets = 'abcdefghijklmnopqrstuvwxyz'
    alphabets_map = {}
    new_string_array = []
    for i in range(len(alphabets)):
        alphabets_map[alphabets[i]] = i

    for char in string:
        if char in alphabets_map:
            idx_of_char = alphabets_map[char]
            new_idx = idx_of_char + key
            if new_idx > 25:
                new_idx = new_idx % 26
            new_string_array.append(alphabets[new_idx])
    return ''.join(new_string_array)
