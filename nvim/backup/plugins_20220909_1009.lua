require('packer').startup(function(use)
  -- packer
  use 'wbthomason/packer.nvim'
  -- languages support
  use 'dag/vim-fish'
  use 'kchmck/vim-coffee-script'
  use 'digitaltoad/vim-pug'
  use 'iloginow/vim-stylus'
  use 'cakebaker/scss-syntax.vim'
  use 'plasticboy/vim-markdown'
  use 'isruslan/vim-es6'
  use 'elzr/vim-json'
  use 'stephpy/vim-yaml'
  use 'terminalnode/sway-vim-syntax'
  use 'vim-jp/vim-cpp'
  -- utilites
  use 'chrisbra/vim-autosave'
  use 'alvan/vim-closetag'
  use 'Stoozy/vimcord'
  use 'tpope/vim-commentary'
  use 'ap/vim-css-color'
  -- theme & statusbar
  --use 'navarasu/onedark.nvim'
  --shaunsingh/nord.nvim
  use {
    'nvim-lualine/lualine.nvim',
    requires = {
      'kyazdani42/nvim-web-devicons', opt = true
    }
  }
  end
)
