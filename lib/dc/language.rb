module DC
  # The official list of supported languages

  # should we be using iso15924 script codes?
  #   http://www.unicode.org/iso15924/iso15924-codes.html
  module Language
    NAMES = {
      'eng' => 'English',
      'spa' => 'Spanish',
      'fra' => 'French',
      'deu' => 'German',
      'ita' => 'Italiano'
    }
    SUPPORTED = NAMES.keys
    DEFAULT = 'ita'

    USER = ['ita','spa','eng']
  end

end
