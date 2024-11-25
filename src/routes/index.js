import { Router } from 'express'
import { supabase } from '../config.js'

const router = Router()

// Buscar todas as palavras
router.get('/palavras', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('palavras')
      .select('*')
      .order('peso', { ascending: false })
      .limit(20)

    if (error) throw error

    // Formatando para d3-cloud
    const palavrasFormatadas = data.map(item => ({
      text: item.palavra,
      size: item.peso * 10 // Multiplicador para melhor visualização
    }))

    res.json(palavrasFormatadas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Adicionar ou atualizar palavra
router.post('/palavras', async (req, res) => {
  try {
    const { palavra } = req.body

    // Verificar se a palavra já existe
    const { data: palavraExistente } = await supabase
      .from('palavras')
      .select('*')
      .eq('palavra', palavra.toLowerCase())
      .single()

    if (palavraExistente) {
      // Se existir, aumenta o peso
      const { data, error } = await supabase
        .from('palavras')
        .update({ peso: palavraExistente.peso + 1 })
        .eq('id', palavraExistente.id)
        .select()

      if (error) throw error
      res.json(data[0])
    } else {
      // Se não existir, cria nova palavra
      const { data, error } = await supabase
        .from('palavras')
        .insert([{ 
          palavra: palavra.toLowerCase(),
          peso: 1
        }])
        .select()

      if (error) throw error
      res.status(201).json(data[0])
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router 