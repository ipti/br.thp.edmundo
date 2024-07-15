export function validaCPF(cpf: string) {
  // Remove todos os caracteres não numéricos

  if (cpf === "") return true

  const strCPF = cpf.replace(/[^\d]/g, '');

  // Verifica se o CPF possui 11 dígitos
  if (strCPF.length !== 11)
    return false;

  // Verifica se o CPF não é uma sequência de dígitos repetidos
  if (/^(\d)\1{10}$/.test(strCPF))
    return false;

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++)
    soma += parseInt(strCPF.charAt(i)) * (10 - i);
  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;

  // Verifica se o primeiro dígito verificador está correto
  if (parseInt(strCPF.charAt(9)) !== digito1)
    return false;

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++)
    soma += parseInt(strCPF.charAt(i)) * (11 - i);
  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;

  // Verifica se o segundo dígito verificador está correto
  if (parseInt(strCPF.charAt(10)) !== digito2)
    return false;

  // Se todas as verificações passaram, retorna verdadeiro
  return true;
}