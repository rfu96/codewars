/*

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA 
its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


*/


//my solution                              

function DNAtoRNA(dna) {                                   
    dna = dna.split('');
    dna.forEach((item, index) => dna.splice(index, 1, conversionTable(item)))
    return dna.join('');
  }
                
  function conversionTable(molecule) {
      if (molecule == 'G') return 'G';
      if (molecule == 'C') return 'C';
      if (molecule == 'A') return 'A';
      if (molecule == 'T') return 'U';
  }

//best practice solution

function DNAtoRNA(dna){                         //did not know that replace() existed
    return dna.replace(/T/g, 'U');
  }


//alternative solution

function DNAtoRNA(dna) {
    return dna.split("T").join("U");            //clever
  }


