import { Injectable } from '@nestjs/common';
import { PokemonsResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}
  async execute() {
    await this.pokemonService.removeAll();

    const data = await this.http.get<PokemonsResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1302',
    );

    // const insertPromisesArray = [];

    // data.results.forEach(({ name, url }) => {
    //   const segments = url.split('/');
    //   const no: number = +segments[6];

    //   const pokemon = new CreatePokemonDto();
    //   pokemon.name = name;
    //   pokemon.no = no;
    //   insertPromisesArray.push(this.pokemonService.create(pokemon));
    // });

    // await Promise.all(insertPromisesArray);

    const pokemonToInsert: CreatePokemonDto[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[6];

      const pokemon = new CreatePokemonDto();
      pokemon.name = name;
      pokemon.no = no;
      pokemonToInsert.push(pokemon);
    });

    await this.pokemonService.insertBath(pokemonToInsert);

    return `Seed executed successfully`;
  }
}
